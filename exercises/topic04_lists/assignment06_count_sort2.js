/*
# Count sort
Write a program that asks for numerical input (integers) between 0 and 99.
When the user inputs a number outside this interval
the program stops asking input.

Finally, print all the number that where entered from small to large.
Numbers that were entered multiple times are printed multiple times.

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
    1
    2
    3
    3
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

for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] > numbers[j]) {
      const temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }
  }
}

numbers.forEach(i => {
  io.write(i);
});
