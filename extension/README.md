# Submit From GeoGebra (browser extension)

A small Chromium extension (Chrome, Edge, Brave, Opera) that sends a construction from a GeoGebra
page to the archive as a pull request. It reads the construction from the open tab, guesses the
problem and the two measurements, previews the accuracy, and adds three files to `Submissions/`:

    construction.ggb    the construction, exactly as it is in GeoGebra
    submission.json     the form's details, read by tools/evaluate_submission.py
    submission.md       the same details in the archive's submission template

The pull request is then evaluated by `.github/workflows/evaluate-submission.yml`
(see [Submissions/README.md](../Submissions/README.md)).

Constructions under 95% cannot be sent as a pull request; the preview says so kindly, and the zip
download still works so people can keep refining. **Download As Zip** and **Open As An Issue** work
without a GitHub account.

## Installing it (before it is on the Chrome Web Store)

1. Download or clone the archive and find the `extension` folder.
2. Open `chrome://extensions` (or `edge://extensions`), and turn on **Developer mode**.
3. Click **Load unpacked** and choose the `extension` folder.
4. Pin it to the toolbar, open a construction on geogebra.org, and click it.

## Setting up GitHub sign-in (maintainer, once)

Sign-in uses GitHub's device flow: the person is shown a short code to enter on github.com. It
needs no server and no secret, only a public client ID.

1. GitHub → Settings → Developer settings → **OAuth Apps** → New OAuth App.
   - Application name: Classical Geometry Problems
   - Homepage URL: https://thor110.github.io/ClassicalGeometryProblems/
   - Authorization callback URL: the same address (the device flow does not use it, but it is required)
2. After creating it, tick **Enable Device Flow** and save.
3. Copy the **Client ID** (not a client secret; none is needed) into `config.js`:

       CLIENT_ID: 'Ov23li...',

Until `CLIENT_ID` is set, the extension says sign-in is not set up yet and offers the zip and the
issue instead.

## Files

| File | What it does |
|---|---|
| manifest.json | Permissions: `activeTab` and `scripting` to read the GeoGebra tab only when clicked, `storage` for the name and sign-in, and access to github.com's sign-in and api.github.com |
| config.js | The archive's owner, repository, branch, the 95% minimum, and the OAuth client ID |
| popup.html, popup.css, popup.js | The form, the preview and the three ways to send |
| github.js | Sign-in, forking, adding the files on a new branch and opening the pull request |
| zip.js | Builds the zip for the download |
| icons/ | The toolbar icons |

## Publishing to the Chrome Web Store

Zip the contents of this folder (manifest.json at the top level) and upload it in the Chrome Web
Store developer dashboard. The store asks for a privacy policy: use
https://thor110.github.io/ClassicalGeometryProblems/pages/privacy.html. For the permission
justifications: `activeTab`/`scripting` read the GeoGebra construction the person is submitting,
`storage` keeps their name and sign-in, and the GitHub hosts are used to open the pull request.
