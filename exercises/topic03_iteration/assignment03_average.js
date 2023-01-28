"use strict";
/*
# Average
Keep on asking for input (`float`) until a zero is entered.
Print the average of these (non-zero) inputs with 3 digits after
the decimal point.
Your program should print `no data` if the first input was a zero.

## Examples:

    > 1.4
    > -2.1
    > 3.0
    > -4
    > 0
    -0.425

    > 0
    no data

*/
import io from "../../utils/io-for-pf.js";

let input;
let sum = 0;
let count = 0;

// eslint-disable-next-line no-constant-condition
while (true) {
  input = parseFloat(io.read());
  if (input === 0) break;
  count++;
  sum += input;
}
let result = sum / count;
if (Number.isNaN(result)) {
  io.write("no data");
} else {
  io.write(result.toFixed(3));
}
