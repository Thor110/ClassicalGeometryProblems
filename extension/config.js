// Settings for the extension. The maintainer fills in CLIENT_ID once the GitHub sign-in app exists
// (GitHub: Settings, Developer settings, OAuth Apps, New OAuth App, then tick "Enable Device Flow").
// The client ID is public by design; there is no secret in this extension.
const CONFIG = {
  CLIENT_ID: 'Ov23liwOsTYP1KhfmYOt',                       // e.g. 'Ov23li...'; until it is set, only the download and issue options work
  OWNER: 'Thor110',
  REPO: 'ClassicalGeometryProblems',
  BRANCH: 'main',
  MINIMUM: 95,                         // the charts' minimum accuracy, in percent
  SITE: 'https://thor110.github.io/ClassicalGeometryProblems/',
};
