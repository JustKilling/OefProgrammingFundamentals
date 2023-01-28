"use strict";
/*
# A range of numbers (inclusive)
Ask for a positive number (``int``) and print
all numbers (line by line) from 0 through the entered number (included)

## Example:
    > 3
    0
    1
    2
    3
*/
import io from "../../utils/io-for-pf.js";

let amount = parseInt(io.read("Please provide a positive number: "));

for (let i = 0; i <= amount; i++) {
  io.write(i);
}