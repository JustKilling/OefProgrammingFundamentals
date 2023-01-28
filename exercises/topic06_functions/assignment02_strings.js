/*
# Basic text functions
Write the functions
`isDigit`,
`toUpper`,
`toLower`,
`isAlpha`,
`isInt`, and
`trim`.
All these functions should be written such that the tests succeed.
The goal of this exercise is to create a lot of
small helper functions and to re-use them.

You can make use of `char2ascii` and `ascii2char`
that respectively turn a character into an integer, and vice versa.

First play with these two functions until you understand how they work.
Then try to write a function `isBetween` this function can be used
to make extreme simple implementations of ``isDigit` and `isAlpha`.

Further, for `trim`, you can make use of `isWhitespace`. Which might come in
handy, since the `trim` function should remove all leading and trailing whitespaces,
but should the whitespaces in between.
*/

function isDigit(n) {
  if (isWhitespace(n)) return false;
  const ascii_0 = 48;
  const ascii_9 = 57;
  return isBetween(n, ascii_0, ascii_9);
}

function toUpper(s) {
  let result = "";
  const jump = -32;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (isAlpha(c) && isLower(c)) {
      result += ascii2char(char2ascii(c) + jump);
      continue;
    }
    result += c;
  }

  return result;
}

function toLower(s) {
  let result = "";
  const jump = 32;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (isAlpha(c) && isUpper(c)) {
      result += ascii2char(char2ascii(c) + jump);
      continue;
    }
    result += c;
  }

  return result;
}

function isLower(c) {
  const ascii_a = 97;
  const ascii_z = 122;
  if (isBetween(c, ascii_a, ascii_z)) {
    return true;
  }
}

function isUpper(c) {
  const asciiA = 65;
  const asciiZ = 90;
  if (isBetween(c, asciiA, asciiZ)) {
    return true;
  }
}

function isAlpha(c) {
  if (isWhitespace(c)) return false;
  return isUpper(c) || isLower(c);

}

function isBetween(c, min, max) {
  let charAscii = char2ascii(c);
  return charAscii <= max && charAscii >= min;

}

function isWhitespace(ch) {
  return ch === " " || ch === "\t" || ch === "\r" || ch === "\n";
}

function char2ascii(ch) {
  if (ch.length !== 1) { // expects strings of length one!
    return -1;
  }

  return ch.charCodeAt(0);
}

function ascii2char(n) {
  return String.fromCharCode(n);
}


function isInt(i) {
  i = removeAllWhitespace(i);
  let result = (parseInt(removeAllWhitespace(i)));

  return Number.isInteger(result);
}


function removeAllWhitespace(s) {
  let result = "";
  for (const c of s) {
    if (!isWhitespace(c)) {
      result += c;
    }
  }
  return result;
}

function trim(s) {
  return trimEnd(trimStart(s));
}

function trimStart(txt) {
  let start = 0;
  for (let i = 0; i < txt.length; i++) {
    let c = txt[i];
    if (!isWhitespace(c)) {
      start = i;
      break;
    }
  }
  return substring(txt, start, txt.length);
}

//console.log(trimEnd("larsens ma       "));
function trimEnd(txt) {
  let end = 0;
  for (let i = txt.length - 1; i >= 0; i--) {
    let c = txt[i];
    if (!isWhitespace(c)) {
      end = i + 1;
      break;
    }
  }
  return substring(txt, 0, end);
}

substring("");

function substring(s, start, end) {
  if (s === undefined) s = "";
  if (start === undefined) start = 0;
  if (end === undefined) {
    end = s.length - 1;
  }
  if (start === end) return "";
  let result = "";

  for (let i = start; i < end; i++) {
    result += s[i];
  }
  return result;
}

export {
  isDigit,
  toUpper,
  toLower,
  isAlpha,
  isInt,
  trim,
  substring
};
