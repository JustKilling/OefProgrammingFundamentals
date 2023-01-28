/*
# Full Digit Swap Extra
Take one integer as input.
Output the number with the digits reversed but keep the sign.
Leading zeros are not allowed.

**Hint 1:**: The integer division does not exist in JavaScript.
You can simulate an integer division, however, by doing a regular (decimal)
division, and then "round the result to the floor" (naar beneden afronden).
This can be done in JavaScript using `Math.floor(x/y)`.

**Hint 2:** The a look at assignment 6 in topic 2. This the extended version of that
assignment.

## Examples:
    > 1234
    4321

    > -4321
    -1234

    > -700
    -7
*/
import io from "../../utils/io-for-pf.js";

const input = io.read("Provide an integer: ");
let number = parseInt(input);
let reverseNumber = "";
const isNeg = number < 0;
number = isNeg ? -number : number;
const inputNumber = number;
while (reverseNumber.length !== inputNumber.toString().length) {
  let lastDigit = number % 10;
  reverseNumber += lastDigit;
  number /= 10;
  number = Math.floor(number);
}

io.write(isNeg ? -reverseNumber : reverseNumber);