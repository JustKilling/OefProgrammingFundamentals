/*
# Isosceles 6
Write a program similar to "Isosceles 5".
This time the triangle has its top at the bottom.

## Example
    > -3
    > 0
    > 5
    *****
     ***
      *

    > -3
    > 0
    > 4
    ****
     **
*/
import io from "../../utils/io-for-pf.js";

let input = 0;
while (input <= 0) {
  input = parseInt(io.read("Please provide a number over 0!: "));
}
let spaceAmount = 0;
let starAmount = input;
let rowAmount = Math.ceil(input / 2);
for (let i = 0; i < rowAmount; i++) {
  let output = "";
  for (let j = 0; j < spaceAmount; j++) {
    output += " ";
  }
  spaceAmount++;
  for (let j = 0; j < starAmount; j++) {
    output += "*";
  }
  starAmount -= 2;
  io.write(output);
}
