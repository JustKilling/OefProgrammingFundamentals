/*
# Count sort
Write a program that asks for numerical input (integers) between 0 and 99.
When the user inputs a number outside this interval
the program stops asking input.

Print all the numbers that where entered, from small to large.
Numbers that were entered multiple times, however, are only printed once.

## Example
    > 3
    > 2
    > 1
    > 3
    > 5
    > 3
    > 1
    > -10
    1
    2
    3
    5
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

const filtered = [];

for (let i = 0; i < numbers.length; i++) {
  if (!filtered.includes(numbers[i])) {
    filtered.push(numbers[i]);
  }
}

for (let i = 0; i < filtered.length; i++) {
  for (let j = i + 1; j < filtered.length; j++) {
    if (filtered[i] > filtered[j]) {
      const temp = filtered[i];
      filtered[i] = filtered[j];
      filtered[j] = temp;
    }
  }
}

filtered.forEach(i => {
  io.write(i);
});
