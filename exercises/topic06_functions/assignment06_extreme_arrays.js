/*
Implement the functions
`extreme`,
`shiftToPositive`,
`shiftToPositiveInPlace`,
`sort`, and
`sortCopy` such that all tests succeed.

`extreme` searches the smallest or largest element in an array.
The second (optional) argument decides whether to pick the smallest (default).

`shiftToPositive` creates an array with the same elements as the input
array, but ensures that all elements are positive by shifting them all with
the smallest possible number (if needed).

`shiftToPositiveInPlace` does the exact same thing, but  *in place* , this means that the
original array is updated.

Take a look at the tests to see how we verify both functions.


`sort`, and `sort_copy` both take an array with numbers as input and returns an array
with the same numbers from low to high (sorted). The difference is that
`sort` is *in-place*, i.e., the original array is updated and that `sortCopy`
creates a new array.

**Hint:** Take a look at this algorithm and try to translate the English
text into JavaScript code. The algorithm is not part of this courses material.
https://en.wikipedia.org/wiki/Insertion_sort

If the functionality you need already exists in
(a) JavaScript (library), try to implement it yourself.
The exercise here is to write code, not to borrow it.
*/

function extreme(array, max = true) {
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < result) {
      result = array[i];
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (max) {
      if (array[i] > result) {
        result = array[i];
      }
    }
  }

  return result;
}


// Returns a new array with all elements shifted so that the minimum value is 0 or greater
function shiftToPositive(array) {
  // Initialize an empty array to hold the result
  const result = [];
  // Find the minimum value in the array
  let min = extreme(array, false);
  // If the minimum value is already 0 or greater, set it to 0
  if (min > 0) {
    min = 0;
  }
  // Shift each element in the array by subtracting the minimum value
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] - min);
  }
  // Return the result array
  return result;
}

// Modifies the given array so that all elements are shifted so that the minimum value is 0 or greater
function shiftToPositiveInPlace(array) {
  // Find the minimum value in the array
  let min = extreme(array, false);
  // If the minimum value is already 0 or greater, set it to 0
  if (min > 0) {
    min = 0;
  }
  // Shift each element in the array by subtracting the minimum value
  for (let i = 0; i < array.length; i++) {
    array[i] -= min;
  }
  // Return the modified array
  return array;
}

// Sorts the given array in ascending order
function sort(array) {
  // Loop through the array
  for (let i = 0; i < array.length; i++) {
    // Loop through the subarray that has not been sorted yet
    for (let j = 0; j < array.length - i - 1; j++) {
      // If the current element is greater than the next element, swap them
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

// Returns a copy of the given array, sorted in ascending order
function sortCopy(array) {
  // Create a copy of the array
  const result = array.slice();
  // Sort the copy
  sort(result);
  // Return the sorted copy
  return result;
}

export {
  extreme,
  shiftToPositive,
  shiftToPositiveInPlace,
  sort,
  sortCopy
};


