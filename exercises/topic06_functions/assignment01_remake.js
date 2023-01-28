/*
# Rework your old exercises
Write the functions `gcd` (the greatest common divisor),
`swapDigits`,
`factorial`,
`variation`,
`avg` (average), and
`largestPrime`.

All these functions should be written such that the tests succeed.
Take a look at your previous programs for the algorithms.
The focus of this exercise, is to decide which parameters to use
and what your function should return.

When working on `variation` keep performance in mind! When the
tests for both `factorial` and `variation` succeed, take a
look at both functions: can you see that they share a big part
of code? Try to extract a function that I would call
`productRange` and use it in both `factorial` and `variation`.
Your tests should still succeed:
 this means your code still works. Changing a program
 (to improve its quality) without changing its solutions or
 outcomes is called *refactoring*.

 On exams, you are expected to do these refactorings (extract and reuse code)
 even when you are not explicitly asked to do so.
*/

import io from "../../utils/io-for-pf.js";

function gcd(get1, get2) {
  let ggd;
  let counter = 0;
  while (counter <= get1 || counter <= get2) {
    counter++;
    if (get1 % counter === 0 && get2 % counter === 0) {
      ggd = counter;
    }
  }
  return ggd;
}

function swapDigits(digit) {
  let reverseNumber = "";
  const isNeg = digit < 0;
  digit = isNeg ? -digit : digit;
  const inputNumber = digit;
  while (reverseNumber.length !== inputNumber.toString().length) {
    let lastDigit = digit % 10;
    reverseNumber += lastDigit;
    digit /= 10;
    digit = Math.floor(digit);
  }

  return parseInt(isNeg ? -reverseNumber : reverseNumber);
}

function factorial(amount) {
  amount = amount < 0 ? NaN : amount;
  amount = amount === 0 ? 1 : amount;
  for (let i = amount - 1; i > 0; i--) {
    amount *= i;
  }
  return amount;
}

function variation(k, n) {
  if (n < 0 || k < 0) {
    return NaN;
  } else if (k > n) {
    return 0;
  } else {
    let nMinusK = n - k;
    let result = 1;
    for (let i = n; i > 0; i--) {
      if (i === nMinusK) break;
      result *= i;

    }
    return result;
  }

}

function avg(numbers) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    count++;
  }

  return sum / count;
}

function largestPrime(n) {
  if (n < 2) return NaN;
  let prime = Array.from({length: n + 1}).fill(true);

  for (let p = 2; p * p <= n; p++) {
    if (prime[p]) {
      for (let i = p * p; i <= n; i += p)
        prime[i] = false;
    }
  }

  for (let i = prime.length - 1; i > 0; i--) {
    if (prime[i])
      return i;
  }
  return NaN;
}

io.write(largestPrime(102));
export {gcd, swapDigits, factorial, variation, avg, largestPrime};
