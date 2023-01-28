/*
Write the functions `zip` and `combine`.

`zip` turns an array of keys and an array of values into a new object.
This, of coarse, only works when both arrays contain an equal amount of
elements. If is not possible to create an object because the above rule
is not met, you can return nothing (undefined).

`combine` creates a new object out of two other objects.
The result should have one entry for each of the keys of both objects.
If both input objects have the same key and the same value, only one
entry is created. If both input dictionaries have the same key with a
different value, the value in the resulting dictionary is an array of both
values.
*/

function combine(obj1, obj2) {
  //assign keys and values from obj1
  let combinedObject = obj1;
  for (const obj2Key in obj2) {
    let val1 = combinedObject[obj2Key];
    let val2 = obj2[obj2Key];
    //if the key does not exist in obj1 or has the same value as in obj2, copy the value from obj2
    if (!val1 || val1 === val2){
      combinedObject[obj2Key] = obj2[obj2Key];
      continue;
    }
    //else combine te values
    combinedObject[obj2Key] = [val1, val2];
  }
  return combinedObject;
}
function zip(keys, values) {
  if(keys.length !== values.length) return undefined;
  let object = {};
  for (let i = 0; i < keys.length; i++) {
    object[keys[i]] = values[i];
  }
  return object;
}
export {combine, zip};
