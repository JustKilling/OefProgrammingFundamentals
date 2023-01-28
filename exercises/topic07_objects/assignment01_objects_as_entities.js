/*
Objects can be used to represent 'instances' of real world and/or tangible entities.
These objects can be homogenous but are often heterogeneous, especially the values will often have different types.

You will often have to create new objects, and they often occur in arrays with similarly structured objects...

For this assignment we will be working with two kinds of objects: one that represents colors (RGB) and
one that represents people (name and age and favorite color). First create the functions `createRGBColor` and
`createPerson`.

Two colors are the same if all three components (red, green, and blue) are the same. But to compute how similar
two colors are that is a bit more difficult. One of the most simple techniques is to compute the sum of squares of
the differences within each color-component. Implement this in the function `colorDistance`.

Now create a function `findMatch` that takes one person (the one who seeks a match) and an array of persons (the possible matches)
and finds the best match for that person. The best match is the person who has a favorite colour that is the most similar to the
favorite colour of the match seeker.

*/

function createRGBColor(red, green, blue) {
  return {
    r: red,
    g: green,
    b: blue
  };
}

function createPerson(name, age, favoriteColor) {
  return {
    name: name,
    age: age,
    favoriteColor: favoriteColor
  };
}

function colorDistance(color1, color2) {
  let redDiff = color1.r - color2.r;
  let greenDiff = color1.g - color2.g;
  let blueDiff = color1.b - color2.b;

  return redDiff ** 2 + greenDiff ** 2 + blueDiff ** 2;
}

function findMatch(person, personArray) {
  let match;
  let matchDistance = Number.MAX_VALUE;
  for (const p of personArray) {
    let distance = colorDistance(p.favoriteColor, person.favoriteColor);
    if (distance < matchDistance){
      match = p;
      matchDistance = distance;
    }
  }
  return match;
}

export {createRGBColor, createPerson, colorDistance, findMatch};
