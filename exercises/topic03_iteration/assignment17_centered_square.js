/*
# Centered Square (parial exam)

Create a JavaScript program that prints a square.
The edges should be pluses (`+`) and in the exact center,
there should be an oh (`o`).

It is only possible to place the `o` in the exact center if
the size of the square is odd. Moreover, the `o` is only visible, for sizes of 3 or higher.

Hence, keep asking for input, until it will yield a square with correctly drawn 'oh'.

These are the three smallest possible squares:
> 3
+++
+o+
+++

> 5
+++++
+   +
+ o +
+   +
+++++

> 7
+++++++
+     +
+     +
+  o  +
+     +
+     +
+++++++
*/
import io from "../../utils/io-for-pf.js";

let input = 0;
while (input < 3 || (input % 2) === 0) {
  input = parseInt(io.read("Please provide a number over 0: "));
}

const firstRow = 0;
const mid = (input - 1) / 2;
const lastRow = input - 1;

for (let i = 0; i < input; i++) {
  let line = "";
  for (let col = 0; col < input; col++) {
    if (i === firstRow || i === lastRow || col === firstRow || col === lastRow) {
      line += "+";
    } else if (i === mid && col === mid) {
      line += "o";
    } else {
      line += " ";
    }
  }
  io.write(line);
}

