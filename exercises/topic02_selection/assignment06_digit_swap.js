"use strict";
/*
# Digit Swap
Read one number (`int`) as input.

If the number has exactly two digits, the program swaps both digits.
Otherwise, the number is printed as is.
The sign of the number is **always** preserved.

**Non-functional requirement:** The input is a number, do not try to convert it to a string.
**Hint:** The integer division does not exist in JavaScript.
You can simulate an integer division, however, by doing a regular (decimal)
division, and then "round the result to the floor" (naar beneden afronden).
This can be done in JavaScript using `Math.floor(x/y)`.

## Examples:
    > 1234
    1234

    > -1234
    -1234

    > -4
    -4

    > 6
    6

    > 34
    43

    > -12
    -21

    > -70
    -7
*/
import io from "../../utils/io-for-pf.js";

let output = "";
const input = io.read("Provide a number: ");
const isNegative = input.includes("-");
let number = Math.abs(input);
if (number < 100 && number > 9) {
  const last = number % 10;
  const first = (number - last) / 10;
  const finalNumber = last * 10 + first;
  output += isNegative ? "-" : "";
  output += finalNumber;
} else {
  output = input;
}
io.write(output);
