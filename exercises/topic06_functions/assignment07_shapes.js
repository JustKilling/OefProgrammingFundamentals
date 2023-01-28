/*
Write the functions
`line`,
`rectangle`, and
`square` such that all tests succeed.

*If the functionality you need already exists in
(a) JavaScript (library), try to implement it yourself.
The exercise here is to write code, not to borrow it.*

The focus in this exercise is to work with default parameters.
All functions expect the `size` as first parameters (1 or 2).
These are compulsive.

After the size you can decide to create a filled shape or an *hollow shape*.
The default is filled.
        ****             ****
        ****             *  *
Filled: ****     Hollow: ****

Then, you can optionally supply how far from the left margin the drawing
should be placed (indentation).
By default, the drawing should be placed as close to the margin as possible.

Finally, it should be possible to change the default drawing char
from '*' to anything else.

*/

function square(size, hollow) {
  let squareString = "";

  for (let i = 0; i < size; i++) {
    let row = "";

    for (let j = 0; j < size; j++) {
      if (hollow && (i === 0 || i === size - 1 || j === 0 || j === size - 1)) {
        row += "o";
      } else if (!hollow) {
        row += "o";
      } else {
        row += " ";
      }
    }

    squareString += row + "\n";
  }

  return squareString;
}

function line(length, filled = true, howFarFromMargin = 0, character = "*") {
  let lineString = "";

  for (let k = 0; k < howFarFromMargin; k++) {
    lineString += " ";
  }

  for (let i = 0; i < length; i++) {
    if (!filled && (i === 0 || i === length - 1)) {
      lineString += character;
    } else if (filled) {
      lineString += character;
    } else {
      lineString += " ";
    }
  }

  return lineString;
}

function rectangle(width, height, filled = true, howFarFromMargin = 0, character = "*") {
  let rectangleString = "";

  for (let i = 0; i < height; i++) {
    let row = "";

    for (let k = 0; k < howFarFromMargin; k++) {
      row += " ";
    }

    for (let j = 0; j < width; j++) {
      if (!filled && (i === 0 || i === height - 1 || j === 0 || j === width - 1)) {
        row += character;
      } else if (filled) {
        row += character;
      } else {
        row += " ";
      }
    }

    rectangleString += row + "\n";
  }

  return rectangleString;
}

export {
  line,
  rectangle,
  square
};
