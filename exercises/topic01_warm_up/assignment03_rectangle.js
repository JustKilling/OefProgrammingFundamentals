/*
# Rectangle
Write a program that *draws* a rectangle.
When we say *draw* we mean write some text/symbols that make up a drawing
in the command line.

The rectangle should consist of *stars* (i.e., `*`-symbols).
The rectangle should be 3 rows high and has a width of 4.

## Output
    ****
    ****
    ****
*/
import io from "../../utils/io-for-pf.js";

io.write("****");
io.write("****");
io.write("****");

// let symbol = "*";
// for (let i = 0; i < 3; i++){
//   let output = "";
//   for (let y = 0; y < 4; y++){
//     output += symbol;
//   }
//   io.write(output);
// }