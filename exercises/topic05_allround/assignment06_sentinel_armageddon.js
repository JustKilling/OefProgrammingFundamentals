/*
# Sentinel Armageddon
Keep on asking for input (`int`) until a zero is entered or when
10 numbers have been entered. Finally, print *the index* of both
the smallest and the largest number that was entered (zero does not count).
The index of the first number is 1, the index of the second is 2, ...

Try not to use an array.

If no numbers were entered (only zero), you should print two zeros.
*/
import io from "../../utils/io-for-pf.js";


let getal = parseInt(io.read("Geef een getal: "));
let smallest = getal;
let biggest = getal;
let smallestIndex = getal;
let biggestIndex = getal;
let counter = 0;

if (getal === 0 || getal === isNaN) {
  smallest = getal;
  biggest = getal;
} else {
  while (getal !== 0 && counter < 10) {
    counter += 1;
    if (getal > biggest) {
      biggest = getal;
      biggestIndex = counter;
    }
    if (getal < smallest && getal !== 0) {
      smallest = getal;
      smallestIndex = counter;
    }
    getal = parseInt(io.read("Geef een getal: "));
  }


}
io.write(smallestIndex);
io.write(biggestIndex);