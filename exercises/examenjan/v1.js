/*
Schrijf de functies `take` en `drop` die beiden een array en een (geheel) getal verwachten als input.
`take` geeft de eerste `n` elementen uit die array terug,
`drop` geeft alles *behalve* die eerste `n` elementen uit die array terug.

Bekijk de testen om na te gaan wat je moet doen in de randgevallen.

Schrijf nu ook de functie `split` die een array opsplitst in gelijke deeltjes.
Doe dit door zo weinig mogelijk nieuwe code te schrijven.

 */

function take(arr, number) {
  let res = [];
  //als het ingegeven nummer groter is dan de array lengte, gebruik de array lengte in plaats
  let amount = number < arr.length ? number : arr.length;

  for (let i = 0; i < amount; i++) {
    res.push(arr[i]);
  }
  return res;
}

function drop(arr, number) {
  let res = [];
  // voeg elk element toe aan een array vanaf een bepaalde index
  for (let i = number; i < arr.length; i++) {
    res.push(arr[i]);
  }
  return res;
}

function split(arr, size) {
  let res = [];
  //return if the array is empty
  if (size <= 0) return res;
  //calculate the amount of parts there will be
  let amountOfParts = arr.length / size;
  for (let i = 0; i < amountOfParts; i++) {
    //select the first part of an array
    res.push(take(arr, size));
    //remove the first part from the array so next time the next part will be picked
    arr = drop(arr, size);
  }
  return res;
}

/*
 Als het niet lukt om `split` werkende te krijgen en je zou split later graag nog hergebruiken,
 mag je volgende code gebruiken als body voor `split`, je krijgt dan natuurlijk geen punten voor dit deel:
 ```return new Array(Math.ceil(arr.length / n)).fill(0).map(()=>arr.splice(0, n));```
 */


/*
Scoring: 4 punten
`take`: 1 punt
`drop`: 1 punt
`split`: 2 punten
 */
export {take, drop, split};

