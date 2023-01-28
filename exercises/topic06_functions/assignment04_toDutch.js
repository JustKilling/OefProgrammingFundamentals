/*
# To Dutch
Write the function`toDutch`, such that all tests succeed.

The key of this exercise is to start small: make your
function work for simple and small input.
E.G., make your `toDutch` function first for digits,
than for 2-digit numbers, etc.

Just like in the previous exercises the key is to reuse existing functions.
On exams, you are expected to do these refactorings (extract and reuse code) even when you are not explicitly asked to do so.

*If the functionality you need already exists in
(a) JavaScript (library), try to implement it yourself.
The exercise here is to write code, not to borrow it.*
*/

import {find} from "./assignment03_strings2.js";

const SMALL = [
  "nul", "een", "twee", "drie", "vier",
  "vijf", "zes", "zeven", "acht", "negen",

  "tien", "elf", "twaalf", "dertien", "veertien",
  "vijftien", "zestien", "zeventien", "achttien", "negentien"
];

const TENS = ["nul", "tien", "twintig", "dertig", "veertig",
  "vijftig", "zestig", "zeventig", "tachtig", "negentig"];

const SCALES = ["een", "tien", "honderd", "duizend ", " miljoen ",
  " miljard ", " biljoen ", " biljard ", " triljoen ", " triljard "];

const nums = [];
for (let i = 0; i < 100; i++) {
  nums.push(i);
}
// function sum(numbers) {
//   let res = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     res += numbers[i];
//   }
//   return res;
// }

function toDutchBelow100(num) {

  if (num < 20) {
    return toDutchLowerThan20(num);
  }

  let t = TENS[Math.floor(num / 10)];
  if (num % 10 === 0) {
    return t;
  } else {
    let u = toDutch(num % 10);

    return combineWithEnInDutch(u, t);
  }

}

function toDutchLowerThan20(num) {
  return SMALL[num];
}

function isKlinker(ch) {
  return find(ch, "aeiou") >= 0;
}

function combineWithEnInDutch(prefix, suffix) {
  let infix = "en";
  if (isKlinker(prefix[prefix.length - 1])) {
    infix = "ën";
  }
  return prefix + infix + suffix;

}

function toDutchBelow1000(num) {
  if (num < 100) {
    return toDutchBelow100(num);
  }

  let hn = Math.floor(num / 100);

  let h;
  if (hn === 1) {
    h = SCALES[2];
  } else {
    h = toDutch(hn) + SCALES[2];
  }

  if (num % 100 === 0) {
    return h;
  }

  if (num % 100 < 10) {
    return combineWithEnInDutch(num, toDutch(num % 100));
  } else {
    return h + toDutch(num % 100);
  }
}

function split(num) {
  if (num === 0) {
    return [0];
  }

  let result = [];

  while (num > 0) {
    result.push(num % 1000);
    num = Math.floor(num / 1000);
  }

  return result;
}

function toDutch(num) {

  if (num < 0) {
    return "min " + toDutch(Math.abs(num));
  }

  if (num < 1000) return toDutchBelow1000(num);

  let parts = split(num);

  let result = "";

  for (let i = parts.length - 1; i >= 1; i--) {
    result += toDutchBelow1000(parts[i]) + SCALES[i + 2];
  }
  result += toDutchBelow1000(parts[0]);

  return result;
}

export {toDutch};
