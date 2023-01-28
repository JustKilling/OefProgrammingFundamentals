"use strict";
/*
# Factorial
Ask for a positive number (``int``) as input and output its factorial.

The factorial of a number n is n! with n! = n * (n-1) * ... * 3 * 2 * 1

For negative numbers the factorial is not defined. In this case you can
simply print `does not compute`.
*/
import io from "../../utils/io-for-pf.js";

let amount = parseInt(io.read("Please provide a positive number: "));
amount = amount === 0 ? 1 : amount;
amount = amount < 0 ? "does not compute" : amount;
for (let i = amount - 1; i > 0; i--) {
  amount *= i;
}
io.write(amount);