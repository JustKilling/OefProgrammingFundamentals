/*
# Highest frequency (II)
Write a program that asks for numerical input (integers)
between 0 and 99.
When the user inputs a number outside this interval
the program stops asking input.

Finally, print the number that was entered the most.
You can print -1 if there was no valid input.
Print all numbers that apply (small to large).

## Examples:

    > 3
    > 2
    > 1
    > 3
    > 5
    > 3
    > 1
    > -10
    3

    > 1
    > 3
    > 2
    > 1
    > 3
    > 5
    > 3
    > 1
    > 678
    1
    3

    > 123
    -1
*/
import io from "../../utils/io-for-pf.js";

const numbers = [];

let input = -1;
let isValidInput = true;
do {
  input = parseInt(io.read());
  if (input <= 99 && input >= 0) {
    numbers.push(input);
  } else {
    isValidInput = false;
  }
} while (isValidInput);

let highest_count = 0;
let highest_indexes = [];
for (let i = 0; i < numbers.length; i++) {
  let count = 0;
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[i] === numbers[j]) {
      count++;
    }
  }
  if (count === highest_count) {
    highest_indexes.push(i);
  } else if (count > highest_count) {
    highest_count = count;
    highest_indexes = [];
    highest_indexes.push(i);
  }
}


//50, 3, 2, 50, 3, 5, 3, 50, 678
let output = [];
if (numbers.length === 0) {
  io.write(-1);
} else {
  for (let i = 0; i < highest_indexes.length; i++) {
    if (!output.includes(numbers[highest_indexes[i]])) {
      output.push(numbers[highest_indexes[i]]);
    }
  }
  output.sort();
  for (let i = 0; i < output.length; i++) {
    io.write(output[i]);
  }
}