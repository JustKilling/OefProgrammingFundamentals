/*
# Sieve of Eratosthenes
Write a program that expects a positive integer as input.
This input is the upper bound.
Then, the program prints all prime-numbers below that upper bound.

**Hint 1:** Look up "Sieve of Eratosthenes" and implement this algorithm.
**Hint 2:** Skip this exercise if you have other exercises left to make.

    > 14
    2
    3
    5
    7
    11
    13
*/
import io from "../../utils/io-for-pf.js";

let n = parseInt(io.read());

if (n < 2) {
  io.write(NaN);
}
let prime = new Array(n).fill(true);

for (let p = 2; p * p <= n; p++) {

  if (prime[p]) {
    for (let i = p * p; i <= n; i += p)
      prime[i] = false;
  }
}

// Print all prime numbers
for (let i = 2; i <= n; i++) {
  if (prime[i])
    io.write(i);
}
