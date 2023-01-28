/*
# Reverse sequence
Write a program that asks for 100 numerical inputs and
outputs them in reverse order.
*/
import io from "../../utils/io-for-pf.js";

const amount = 100;
const numbers = [amount];
let counter = 0;
for (let i = amount - 1; i >= 0; i--) {
  counter++;
  numbers[i] = parseInt(io.read(counter + ")" + "Please provide a number: "));
}
for (let i = 0; i < numbers.length; i++) {
  io.write(numbers[i]);
}
