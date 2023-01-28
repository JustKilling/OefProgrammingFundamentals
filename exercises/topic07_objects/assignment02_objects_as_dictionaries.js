/*
Objects can be used to represent 'dictionary' like data, whose main purpose is looking up data,
but you will also have to store new data and occasionally remove some. These objects are usually
homogeneous: all keys are the same type, but all values have the same type as well.

Write a function `countLetters` that takes a piece of text as input and produces an object that
contains the frequency for each letter. This function is case-insensitive, and does not consider
punctuations, numbers and/or any other special characters.

Second, write a function `popMostFrequent` that, given a frequency table of letters, computes the most frequent one.
As a result the frequency table should be updated such that the most frequent letter is removed.

Finally, write a function `orderLettersByFrequency` that, given a piece of text, returns all the letters it contains in
order of frequency (i.e., the most frequent letter first). We could use "array" as return-type, but because all the elements are "chars" (letters),
we can also use a string as return type. (on an exam it would be your job to deduce this requirement from the tests.)
*/

import {isAlpha, toLower} from "../topic06_functions/assignment02_strings.js";

function countLetters(text) {
  let result = {};
  for (let letter of text) {
    if (isAlpha(letter)) {
      letter = toLower(letter);
      result[letter] = (result[letter] || 0) + 1;
    }
  }

  return result;
}

function orderLettersByFrequency(text) {
  let counted = countLetters(text);
  let result = "";

  while (Object.keys(counted).length > 0) {
    result += popMostFrequent(counted);
  }

  return result;

}

function popMostFrequent(frequencies) {
  let mostFrequent = null;
  let highestFrequency = 0;

  for (let letter in frequencies) {
    if (frequencies[letter] > highestFrequency) {
      mostFrequent = letter;
      highestFrequency = frequencies[letter];
    }
  }

  delete frequencies[mostFrequent];
  return mostFrequent;
}



export {countLetters, orderLettersByFrequency, popMostFrequent};
