/*
Given is an array of friends, which we represent in JavaScript as
an object with a `name`- and an `age`-property.
We know that these arrays are always sorted by name (alphabetically),
the ages are random.

Write the following three functions a **efficient** as possible:
`findByName(arr, aName)`,
`getAge(arr, aName)`, and
`getOldest(arr)`.

`findByName(arr, aName)` tries to find **a friend** (a `person`)
 with the given name in the array.
Give an appropriate answer when no such friend exists in the array.
Note that the array is sorted by name.

`getAge(arr, aName)` tries to find **the age** of the friend
with the given name in an array.
Give an appropriate answer when no such friend exists in the array (
Note that the array is sorted by name.)


`getOldest(arr)` searches for the oldest **friend** in an array.
It is possible that more than one such friend exists,
hence you should return the **all**.
Make sure they are (still) ordered alphabetically.

 */

function findByName(pplList, personName, start = 0, stop = pplList.length) {
  if (stop - start === 0) return null;
  let middle = Math.floor((start + stop) / 2);
  let middlePerson = pplList[middle];
  if (personName < middlePerson.name) {
    return findByName(pplList, personName, start, middle);
  } else if (personName > middlePerson.name) {
    return findByName(pplList, personName, middle + 1, stop);
  } else {
    return middlePerson;
  }
}

function getAge(pplList, personName) {
  let person = findByName(pplList, personName);
  if (!person) return undefined;

  return person.age;
}

function getOldest(pplList) {
  let oldestAge = pplList[0].age;
  let oldestPeople = [];
  for (const person of pplList) {
    if (person.age > oldestAge) {
      oldestAge = person.age;
      oldestPeople = [person];
    } else if (person.age === oldestAge) {
      oldestPeople.push(person);
    }
  }
  return oldestPeople;
}

export {findByName, getAge, getOldest};
