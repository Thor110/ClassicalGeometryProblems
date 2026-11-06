// A plain word check for the text people type (name, method, description, notes). It is used by the
// extension before sending, and by tools/evaluate_submission.py, which reads the JSON below, on
// every pull request. Whole words only, so "Scunthorpe" or "assume" are never caught. It cannot
// catch everything; the maintainer still reads each submission before it is charted.
//   words:    offensive in any box
//   prefixes: offensive at the start of a word ("shitty", "fucking")
//   names:    fine in a description but not as someone's real name
const LANGUAGE = {"words": ["arse", "arsehole", "ass", "asshole", "bastard", "bitch", "bitches", "bollocks", "bugger", "chink", "cock", "cocks", "coon", "crap", "cunt", "dick", "dickhead", "dike", "dyke", "fag", "faggot", "fags", "gook", "jizz", "kike", "nazi", "nigga", "nigger", "niggers", "paki", "piss", "pissed", "porn", "prick", "pussy", "rape", "raped", "rapist", "retard", "retarded", "shag", "slag", "slut", "spastic", "spic", "tits", "tosser", "tranny", "twat", "wank", "wanker", "wetback", "whore"],
 "prefixes": ["fuck", "fuk", "shit", "cunt", "nigg", "fagg", "motherf", "bullshit", "wank", "whore", "slut", "dildo", "porn"],
 "names": ["fart", "farty", "farts", "poo", "poop", "poopy", "poos", "butt", "butts", "doodle", "booger", "boobs", "boob", "willy", "weewee", "anonymous", "test", "nobody", "noname", "asdf", "qwerty", "lol", "lmao"]};

// Lower case, accents removed, and common look-alike characters read as letters (0 as o, 4 as a, $ as s).
function languageWords(text) {
  const look = {'0': 'o', '1': 'i', '3': 'e', '4': 'a', '5': 's', '7': 't', '@': 'a', '$': 's', '!': 'i'};
  const plain = String(text || '').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[013457@$!]/g, c => look[c]);
  const words = plain.split(/[^a-z]+/).filter(Boolean);
  // also read words spelled out with gaps ("f u c k", "s.h.i.t")
  const spaced = plain.match(/\b(?:[a-z][^a-z0-9\n]{1,2}){2,}[a-z]\b/g) || [];
  return words.concat(spaced.map(s => s.replace(/[^a-z]/g, '')));
}

// The words in `text` that the check does not accept, for a name (isName) or any other box.
function languageCheck(text, isName) {
  const found = new Set();
  for (const w of languageWords(text)) {
    if (LANGUAGE.words.includes(w) || LANGUAGE.prefixes.some(p => w.startsWith(p)) || (isName && LANGUAGE.names.includes(w))) found.add(w);
  }
  return [...found];
}
