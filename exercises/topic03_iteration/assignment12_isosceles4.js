/*
# Isosceles 4
Write a program similar to "Isosceles 1".
This time triangle is right aligned and has its top on top.

## Example
    > -3
    > 0
    > 5
        *
       **
      ***
     ****
    *****
*/
import io from "../../utils/io-for-pf.js";

let input = 0;
while (input <= 0) {
  input = parseInt(io.read("Please provide a number over 0!: "));
}
for (let i = 1; i <= input; i++) {
  let output = "";
  for (let j = input - i; j > 0; j--) {
    output += " ";
  }
  for (let j = 1; j <= i; j++) {
    output += "*";
  }
  io.write(output);
}
