/*
# Factorial (II)
Ask for a number (`int`) as input and output its factorial.

The factorial of a number n is n! with n! = n * (n-1) * ... * 3 * 2 * 1
Your program should print `does not compute` when a negative number is entered.
*/
import io from "../../utils/io-for-pf.js";

const num = parseInt(io.read());

if (num >= 0) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  io.write(result);
} else {
  io.write("does not compute");
}
