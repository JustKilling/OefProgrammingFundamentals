/*
# Recursion

Fibonacci was an Italian mathematician who lived around 1200 A.D..
He devised a sequence of numbers, called the Fibonacci-numbers which can easily expressed
as a "meervoudig functievoorschrift". We do not need to understand the implications, need or even mathematics.

We should however be able to translate this into a recursive JavaScript function.

<pre>
          /
          | 0, for n = 0
          |
fib(n) = <  1, for n = 1
          |
          | fib(n-1) + fib(n-2), else
          \
</pre>

For bigger numbers, this solution is correct but too slow.
Write a second version `fibFast` that uses a loop rather than recursion.
**Hint:** Search the internet for help.
**Hint:** Skip this *fast* exercise if you are running behind!


*/

function fib(n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function fibFast(n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;

  let nr = 0;
  let previousNr = 1;
  for (let i = 0; i < n; i++) {
    let temp = nr;
    nr += previousNr;
    previousNr = temp;
  }

  return nr;
}

function fibMemoization(n, prev = []) {
  if (prev[n] != null) return prev[n];
  if (n === 0) return 0;
  if (n <= 2) return 1;
  let result = fibMemoization(n - 1, prev) + fibMemoization(n - 2, prev);
  prev[n] = result;
  return result;
}


export {fib, fibFast};
