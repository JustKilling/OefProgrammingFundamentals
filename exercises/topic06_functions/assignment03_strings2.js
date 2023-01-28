/*
Write the functions
`reverse`,
`isPalindrome`,
`substringOfLength`,
`find`,
`findAll`,
 `replace`, and
 `decompose`
 such that all tests succeed.

The key of this exercise is to start small: make your
function work for simple and small inputs. Just like in
the previous exercise the key is to reuse existing functions.

*If the functionality you need already exists in
(a) JavaScript (library), try to implement it yourself.
The exercise here is to write code, not to borrow it.*
*/
import {substring} from "./assignment02_strings.js";
import {min} from "mocha/lib/reporters/index.js";

function reverse(txt) {
  let res = "";
  for (let i = txt.length - 1; i >= 0; i--) {
    res += txt[i];
  }
  return res;
}

function isPalindrome(txt) {
  return txt === reverse(txt);
}

function substringOfLength(txt, start, length) {
  if (start < 0) {
    start = txt.length + start;
  }
  if (length < 0) {
    length = Math.abs(length);
    start -= length;
    if (start < 0) {
      start = -1;
      length = -1;
    }
  }

  let stop = Math.min(txt.length, start + length);
  return substring(txt, start, stop);
}

function find(needle, haystack, start = 0) {
  for (let i = start; i < haystack.length; i++) {
    if (substringOfLength(haystack, i, needle.length) === needle) {
      return i;
    }
  }
  return -1;
}

function findAll() {

}

function replace() {

}

function decompose() {

}

export {
  reverse,
  isPalindrome,
  substringOfLength,
  find,
  findAll,
  replace,
  decompose
};
