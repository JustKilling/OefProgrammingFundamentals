"use strict";
/*
# Sentinel
Keep on asking for input (`float`) until a zero is entered.
Count and print how many non-zero inputs you received.

Counting always results in integers. Hence, there is no need to print any digits after the decimal point.

## Example:

    > 1.4
    > -2.1
    > 3.0
    > -4
    > 0
    4

*/
import io from "../../utils/io-for-pf.js";

let input;
let sum = 0;

while (input !== 0) {
  input = parseFloat(io.read());
  if (input === 0) break;
  sum++;
}

io.write(sum);