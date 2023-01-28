/*
# Sentinel Extreme Pro
Keep on asking for input (`int`) until a zero is
entered or when 10 numbers have been entered.
Finally, print both the smallest and the largest
number that was entered (zero does not count).

If no numbers were entered (only zero), you should print two zeros.
*/
import io from "../../utils/io-for-pf.js";

let getal = parseInt(io.read("Geef een getal: "));
let smallest = getal;
let biggest = getal;
let counter = 0;
if (getal === 0 || getal === isNaN) {
  smallest = getal;
  biggest = getal;
} else {
  while (getal !== 0 && counter < 10) {
    counter += 1;
    if (getal > biggest) {
      biggest = getal;
    }
    if (getal < smallest && getal !== 0) {
      smallest = getal;
    }
    getal = parseInt(io.read("Geef een getal: "));
  }


}
io.write(smallest);
io.write(biggest);

