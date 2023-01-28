/*
# Product
Write a program that expects two numeric inputs from the user.
The program prints the product (result of a multiplication) on screen.
*/
import io from "../../utils/io-for-pf.js";

const num1 = parseInt(io.read("Provide the first number: "));
const num2 = parseInt(io.read("Provide the second number: "));

const result = num1 * num2;

io.write(result);