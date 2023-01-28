/*
# Highest frequency (II)
Write a program that asks for numerical input (integers)
between 0 and 99.
When the user inputs a number outside this interval
the program stops asking input.

Finally, print the number that was entered the most.
You can print -1 if there was no valid input.
If multiple numbers apply, print the largest.

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
let highest_index = -1;
for (let i = 0; i < numbers.length; i++) {
  let count = 0;
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[i] === numbers[j]) {
      count++;
    }
  }
  if (count > highest_count) {
    highest_count = count;
    highest_index = i;
  } else if (count === highest_count) {
    if (numbers[i] > numbers[highest_index]) {
      highest_index = i;
    }
  }
}

if (numbers.length === 0) {
  (io.write(-1));
} else {
  io.write(numbers[highest_index]);
}
