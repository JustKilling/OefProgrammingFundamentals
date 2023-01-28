/*
# Euclid
Write a program that reads two positive integers (no need to check the input).
Print out the largest divisor that both numbers have in common
(the greatest common divisor, GCD or "grootste gemene deler")

**Hint:** use Euclid's algorithm:
    https://en.wikipedia.org/wiki/Euclidean_algorithm
    https://nl.wikipedia.org/wiki/Algoritme_van_Euclides#Het_algoritme
*/
import io from "../../utils/io-for-pf.js";

let get1 = parseInt(io.read("Geef het eerste getal: "));
let get2 = parseInt(io.read("Geef het tweede getal: "));

let ggd;
let counter = 0;
while (counter <= get1 || counter <= get2) {
  counter++;
  if (get1 % counter === 0 && get2 % counter === 0) {
    ggd = counter;
  }
}
io.write(ggd);