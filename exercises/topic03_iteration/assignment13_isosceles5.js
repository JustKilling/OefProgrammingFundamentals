/*
# Isosceles 5
Write a program similar to "Isosceles 2".
This time triangle is centered and has its top on top.
Watch out, not all triangles have a top with 1 star. Some have two stars.

## Example
    > -3
    > 0
    > 5

      *
     ***
    *****

    > -3
    > 0
    > 4
     **
    ****

*/
import io from "../../utils/io-for-pf.js";

let input = 0;
while (input <= 0) {
  input = parseInt(io.read("Please provide a number over 0!: "));
}
let spaceAmount = Math.floor(input / 2);
if (spaceAmount % 2 !== 0) {
  spaceAmount--;
}
let starAmount = input % 2 === 0 ? 2 : 1;

let rowAmount = Math.ceil(input / 2);
for (let i = 0; i < rowAmount; i++) {
  let output = "";
  for (let j = 0; j < spaceAmount; j++) {
    output += " ";
  }
  spaceAmount--;
  for (let j = 0; j < starAmount; j++) {
    output += "*";
  }
  starAmount += 2;
  io.write(output);
}