"use strict";
/*
# Check Sign (2)
Read one integer (int).
The program prints a `+` when the number is positive.
The program prints a `-` when the number is negative.
The program prints a `0` when the number is zero.
*/
import io from "../../utils/io-for-pf.js";

const num1 = parseInt(io.read("Provide a number: "));
let output;
if (num1 > 0) {
  output = "+";
} else if (num1 < 0) {
  output = "-";
} else {
  output = "0";
}
io.write(output);