"use strict";
/*
# Star Rectangle
Write a program that asks for two numerical inputs (`int`): the height and
the width of a rectangle. Print such a rectangle on screen using `*`.

The program has no output if either the height or the width is negative  or zero.

## Example:
    > 4
    > 3
    ***
    ***
    ***
    ***
*/
import io from "../../utils/io-for-pf.js";

let length = parseInt(io.read("provide the length:"));
let width = parseInt(io.read("provide the width:"));

for (let x = 0; x < length; x++) {
  if (length <= 0 || width <= 0) break;
  let line = "";
  for (let y = 0; y < width; y++) {
    line += "*";
  }
  if (!(length === 0 || width === 0)) {
    io.write(line);
  }
}