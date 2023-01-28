"use strict";
/*
# The Swap Trick (Advanced)
Write a program that reads two integer inputs into
the two variables `a` and `b`.
Make sure that the contents of `a` and `b` are
swapped before printing.
You are not allowed to create any other variable.

We already provided the code for the input and the output.
You should only provide the code for 'the swap' (between the two lines of comments)
You can update this program, but are not allowed to change it!

*/
import io from "../../utils/io-for-pf.js";

let a = parseInt(io.read()); // do not remove this line
let b = parseInt(io.read()); // do not remove this line

// Write your program below:
b += a; //  3
a -= b; // -2
a = -a; //  2
b -= a; //  1
// Write your program above.

io.write(a); // do not (re)move this line
io.write(b); // do not (re)move this line
