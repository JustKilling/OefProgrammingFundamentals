"use strict";
/*
# Oh-point-three
Write a program that takes two numbers (`float`) as input.
The program outputs `equal` if the sum of both numbers equals 0.3 or
`not equal` in the other case.

**Hint:** reflect on how a computer stores decimal numbers when
your program behaves unexpectedly.

## Examples:
    > 0.5
    > -0.2
    equal

    > 0.3
    > 0
    equal

    > 0.4
    > -0.2
    not equal
*/
import io from "../../utils/io-for-pf.js";

const num1 = parseFloat(io.read("Provide the first number: "));
const num2 = parseFloat(io.read("Provide the second number: "));

if (Math.abs(0.3 - (num1 + num2)) < 0.000001) {
  io.write("equal");
} else {
  io.write("not equal");
}