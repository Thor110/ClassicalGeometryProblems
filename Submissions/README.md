# Submissions

New constructions arrive here as pull requests, usually sent from GeoGebra with the archive's
browser extension (see [extension/](../extension/)). Each submission is one folder:

    Submissions/<date>-<problem>-<name>-<id>/
        construction.ggb    the GeoGebra construction, exactly as it was in GeoGebra
        submission.json     the details from the form: name, problem, chosen measurements, notes
        submission.md       the same details in the archive's submission template

Every submission pull request is evaluated automatically by
[.github/workflows/evaluate-submission.yml](../.github/workflows/evaluate-submission.yml), which runs
[tools/evaluate_submission.py](../tools/evaluate_submission.py) and comments with the result:

- **ready-for-review**: the problem is confirmed, the accuracy reproduced, and the checks pass.
  The maintainer verifies it and moves it into the charts.
- **needs-manual-check**: the construction does not fit the chosen problem, the problem could not
  be identified, or a check needs a person (for example a point placed by hand).
- **possible-duplicate**: it is identical or nearly identical to an entry already in the archive.
- **below-minimum**: under 95%. The pull request is closed with the figure and some encouragement.
- **language**: the name, method, description or notes did not pass the word check in
  [extension/language.js](../extension/language.js) (offensive words, or a joke in place of a real
  name). Closed with a kind note; the maintainer reopens it if the check made a mistake.
- **duplicate-submission**: the same construction file as an earlier submission still waiting for
  review (a double click, say). Closed; the earlier one carries it.
- **limit-reached**: the person already has 5 submissions waiting. Closed with thanks, to be sent again
  once some are reviewed. The maintainer and collaborators have no limit.

Submissions can also be sent without the extension: download the files from it, or fill in
[SUBMISSION_TEMPLATE.md](../SUBMISSION_TEMPLATE.md), and open a pull request or an issue.
