"use strict";
/*
# Sum
Keep on asking for input (`float`) until a zero is entered.
Print the sum of these (non-zero) inputs with 1 digit after the decimal point.

**Hint:** In JavaScript you can convert a (floating point) number
to a string using `toFixed`(inverse of parseFloat). Turning π into the string
`3.14` (two digits after the decimal point) would than look like this:
`Math.PI.toFixed(2)`.

## Examples:

    > 1.4
    > -2.1
    > 3.0
    > -4
    > 0
    -1.700

*/
import io from "../../utils/io-for-pf.js";

let input;
let sum = 0;
while (input !== 0) {
  input = parseFloat(io.read());
  sum += input;
}
io.write(sum.toFixed(1));