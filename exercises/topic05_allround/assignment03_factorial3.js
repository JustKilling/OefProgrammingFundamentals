/*
# Factorial (II)
Ask for a number (`int`) as input and output its factorial.
Your program should keep on asking for input until a
positive number is entered.

## Example:
    > -6
    > -3
    > 4
    24
    */
import io from "../../utils/io-for-pf.js";

let num = -1;

while (num < 0) {
  num = parseFloat(io.read());
}

if (num >= 0) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  io.write(result);
} else {
  io.write("does not compute");
}
