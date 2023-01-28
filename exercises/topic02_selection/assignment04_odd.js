"use strict";
/*
# Odd or Even
A number is even when it is divisible by two.
Make a program print `odd` or `even` depending on the input (`int`).

**Hint:** Use the `%`-operator.

## Examples
    > 2
    even

    > 3
    odd
*/
import io from "../../utils/io-for-pf.js";

const num1 = parseInt(io.read("Provide a number: "));

let output = num1 % 2 === 0 ? "even" : "odd";
io.write(output);
