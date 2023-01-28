/*
# Sentinel Extreme
Keep on asking for input (`int`) until a zero is entered.
Finally, print both the smallest and the largest number
that was entered (zero does not count).

If no numbers were entered (only zero), you should print two zeros.

## Example:
    > -1
    > -2
    > 0
    -2
    -1
*/
import io from "../../utils/io-for-pf.js";

let numbers = [];
let input = 0;
do {
  input = parseInt(io.read());
  numbers.push(input);
} while (input !== 0);

if (numbers[1] === 0) numbers[1] = numbers[0];

let highestNumber = Number.NEGATIVE_INFINITY;
let lowestNumber = Number.POSITIVE_INFINITY;
for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  if (number <= lowestNumber) {
    lowestNumber = number;
  }
  if (number >= highestNumber) {
    highestNumber = number;
  }
}
io.write(lowestNumber);
io.write(highestNumber);
