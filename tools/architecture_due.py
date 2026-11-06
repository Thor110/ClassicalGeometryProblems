"""Is the architecture search due again?

The search (tools/architecture_search.py) and the measurements (tools/architecture.py) are worth
running again as the charts grow. Rather than a fixed number, the number of new entries to wait for,
X, follows the pace of submissions, worked out from the record of past runs in
Architecture/Finds/finds.json:

  X = the number of entries added in an average 30 days (from the first run to now),
      but never fewer than MIN_X and never more than MAX_X.

So when entries arrive quickly the search runs about once a month, and when they arrive slowly it
waits for a few. A run is due when:

  - it has never run, or
  - at least X entries have been added since the last run, or
  - at least one entry has been added and STALE_DAYS have passed since the last run.

  python tools/architecture_due.py           prints the reasoning; exit code 0 if due, 1 if not
  (in GitHub Actions it also writes due=true/false, x=… and new=… to $GITHUB_OUTPUT)
"""
import datetime, json, os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import verify as v

MIN_X, MAX_X, FIRST_X = 3, 25, 5     # FIRST_X: until there is a month of history to judge the pace by
STALE_DAYS = 180
FINDS_JS = os.path.join(v.ROOT, 'pages', 'architecture-finds.js')


def entries_now():
    return sum(1 for p in v.load_archive()['problems'] for e in p['entries'])


def decide(runs, now_entries, today):
    if not runs:
        return True, FIRST_X, now_entries, 'the search has never been run'
    last = runs[-1]; first = runs[0]
    new = now_entries - last['entries']
    days_since = (today - datetime.date.fromisoformat(last['date'])).days
    span = (today - datetime.date.fromisoformat(first['date'])).days
    if span >= 30:
        pace = (now_entries - first['entries']) / span * 30
        x = max(MIN_X, min(MAX_X, round(pace)))
        how = '%.1f entries a month since %s' % (pace, first['date'])
    else:
        x = FIRST_X; how = 'less than a month of history, so the starting value'
    if new >= x:
        return True, x, new, '%d new entries since %s, and X is %d (%s)' % (new, last['date'], x, how)
    if new >= 1 and days_since >= STALE_DAYS:
        return True, x, new, '%d new entr%s and %d days since the last run (X is %d, %s)' % (new, 'y' if new == 1 else 'ies', days_since, x, how)
    return False, x, new, 'not yet: %d new entr%s since %s, and X is %d (%s)' % (new, 'y' if new == 1 else 'ies', last['date'], x, how)


def main():
    runs = []
    data = os.path.join(v.ROOT, 'Architecture', 'Finds', 'finds.json')
    if os.path.exists(data): runs = json.load(open(data, encoding='utf-8')).get('runs', [])
    elif os.path.exists(FINDS_JS): runs = v.read_js(FINDS_JS).get('runs', [])
    due, x, new, why = decide(runs, entries_now(), datetime.date.today())
    print(('Due: ' if due else 'Not due: ') + why)
    if os.environ.get('GITHUB_OUTPUT'):
        with open(os.environ['GITHUB_OUTPUT'], 'a') as f: f.write('due=%s\nx=%d\nnew=%d\n' % (str(due).lower(), x, new))
    sys.exit(0 if due else 1)


if __name__ == '__main__':
    main()
