// The sign-in tab. GitHub's device flow shows a code that the person types on github.com, which
// means leaving the extension's popup, and a popup closes the moment it loses focus. So the sign-in
// runs in this tab instead, which stays open: it keeps the code on screen, remembers it if the tab
// is reloaded, and waits for GitHub. When it is done it goes back to the GeoGebra tab.

const $ = id => document.getElementById(id);
const back = Number(new URLSearchParams(location.search).get('tab')) || null;   // the GeoGebra tab
const say = html => { $('status').innerHTML = html; };

async function pending() {
  // Reuse a code already shown (this tab reloaded, or opened twice) while it has a minute left.
  const {signin} = await chrome.storage.local.get('signin');
  if (signin && signin.expires_at - Date.now() > 60000) return signin;
  const s = await GH.start();
  const p = {device_code: s.device_code, user_code: s.user_code, verification_uri: s.verification_uri,
             interval: s.interval || 5, expires_at: Date.now() + (s.expires_in || 900) * 1000};
  await chrome.storage.local.set({signin: p});
  return p;
}

async function run() {
  try {
    const {token, login} = await chrome.storage.local.get(['token', 'login']);
    if (token) return done(login);
    const p = await pending();
    $('code').textContent = p.user_code;
    $('steps').hidden = false;
    $('copy').onclick = async () => {
      try { await navigator.clipboard.writeText(p.user_code); $('copy').textContent = 'Copied'; }
      catch (e) { $('copy').textContent = 'Select the code above and copy it'; }
    };
    $('open').onclick = () => chrome.tabs.create({url: p.verification_uri, active: true});
    const tick = () => { $('left').textContent = Math.max(0, Math.round((p.expires_at - Date.now()) / 60000)); };
    tick(); setInterval(tick, 15000);
    say('Waiting for you to authorize on GitHub…');
    const t = await GH.poll({...p, expires_in: (p.expires_at - Date.now()) / 1000});
    const me = await GH.api(t, '/user');
    await chrome.storage.local.set({token: t, login: me.login});
    await chrome.storage.local.remove('signin');
    done(me.login);
  } catch (err) {
    await chrome.storage.local.remove('signin');
    $('steps').hidden = true;
    say(`<span class="hot">${err.message}</span><br><a href="#" id="again">Get a new code</a>`);
    $('again').onclick = e => { e.preventDefault(); say('Asking GitHub for a sign-in code…'); run(); };
  }
}

async function done(login) {
  $('steps').hidden = true;
  say(`<span class="good">Signed in to GitHub as <b>${login}</b>.</span><br>` +
      (back ? 'Taking you back to GeoGebra. Click the extension again to send your construction.' : 'Go back to your GeoGebra tab and click the extension again to send your construction.'));
  if (back) setTimeout(async () => {
    try { await chrome.tabs.update(back, {active: true}); window.close(); } catch (e) { /* that tab was closed: stay here */ }
  }, 2500);
}

run();
