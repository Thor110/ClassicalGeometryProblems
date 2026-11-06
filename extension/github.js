// GitHub sign-in (the device flow, so no server or secret is needed) and opening the pull request.

const GH = {
  // 1. Ask GitHub for a sign-in code to show to the person.
  async start() {
    const r = await fetch('https://github.com/login/device/code', {
      method: 'POST', headers: {Accept: 'application/json', 'Content-Type': 'application/x-www-form-urlencoded'},
      body: new URLSearchParams({client_id: CONFIG.CLIENT_ID, scope: 'public_repo'}),
    });
    if (!r.ok) throw new Error('GitHub did not start the sign-in (' + r.status + ').');
    return r.json();      // {device_code, user_code, verification_uri, interval, expires_in}
  },

  // 2. Wait while they enter the code on github.com, then receive the token.
  async poll(start, onWait) {
    let interval = (start.interval || 5) * 1000;
    const until = Date.now() + (start.expires_in || 900) * 1000;
    while (Date.now() < until) {
      await new Promise(res => setTimeout(res, interval));
      const r = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST', headers: {Accept: 'application/json', 'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({client_id: CONFIG.CLIENT_ID, device_code: start.device_code, grant_type: 'urn:ietf:params:oauth:grant-type:device_code'}),
      });
      const j = await r.json();
      if (j.access_token) return j.access_token;
      if (j.error === 'slow_down') interval += 5000;
      else if (j.error && j.error !== 'authorization_pending') throw new Error(j.error_description || j.error);
      if (onWait) onWait();
    }
    throw new Error('The sign-in code expired. Please try again.');
  },

  async api(token, path, options = {}) {
    const r = await fetch('https://api.github.com' + path, {
      ...options,
      headers: {Accept: 'application/vnd.github+json', Authorization: 'Bearer ' + token, 'X-GitHub-Api-Version': '2022-11-28', ...(options.headers || {})},
    });
    const text = await r.text(); const body = text ? JSON.parse(text) : {};
    if (!r.ok) { const e = new Error((body && body.message) || ('GitHub said ' + r.status)); e.status = r.status; throw e; }
    return body;
  },

  // 3. Fork (unless it is the maintainer), bring the fork up to date, add the files on a new branch,
  //    and open the pull request. files: [{path, base64}]. Returns the pull request's address.
  async submit(token, files, title, body, branch, progress) {
    const up = CONFIG.OWNER + '/' + CONFIG.REPO, say = progress || (() => {});
    const me = await this.api(token, '/user');
    let target = up;
    if (me.login.toLowerCase() !== CONFIG.OWNER.toLowerCase()) {
      say('Making your copy of the archive on GitHub…');
      const fork = await this.api(token, '/repos/' + up + '/forks', {method: 'POST', body: JSON.stringify({default_branch_only: true})});
      target = fork.full_name;
      for (let i = 0; i < 20; i++) {                    // a new fork can take a few seconds to appear
        try { await this.api(token, '/repos/' + target + '/git/ref/heads/' + CONFIG.BRANCH); break; }
        catch (e) { await new Promise(res => setTimeout(res, 1500)); }
      }
      await this.api(token, '/repos/' + target + '/merge-upstream', {method: 'POST', body: JSON.stringify({branch: CONFIG.BRANCH})}).catch(() => {});
    }
    say('Adding your construction…');
    const base = await this.api(token, '/repos/' + up + '/git/ref/heads/' + CONFIG.BRANCH);
    await this.api(token, '/repos/' + target + '/git/refs', {method: 'POST', body: JSON.stringify({ref: 'refs/heads/' + branch, sha: base.object.sha})});
    for (const f of files) {
      await this.api(token, '/repos/' + target + '/contents/' + f.path.split('/').map(encodeURIComponent).join('/'), {
        method: 'PUT', body: JSON.stringify({message: title, content: f.base64, branch}),
      });
    }
    say('Opening the pull request…');
    const pr = await this.api(token, '/repos/' + up + '/pulls', {method: 'POST', body: JSON.stringify({
      title, body, base: CONFIG.BRANCH, head: (target === up ? '' : me.login + ':') + branch, maintainer_can_modify: true,
    })});
    return pr.html_url;
  },
};
