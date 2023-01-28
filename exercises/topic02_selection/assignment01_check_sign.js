"use strict";
/*
# Check Sign
Read one integer (int).
The program prints a `+` when the number is positive or zero.
The program prints a `-` when the number is negative.
*/
import io from "../../utils/io-for-pf.js";

const num1 = parseInt(io.read("Provide a number: "));

let output = num1 >= 0 ? "+" : "-";

io.write(output);