/*
Schrijf een functie die van een array van gelijkaardige objecten een
nieuwe array maakt, met daarin enkel de waardes van één bepaalde *property*.
(in de testen zie je een voorbeeld met een array van kleuren die met deze functie omgevormd wordt
naar een array van transparantie (alpha).
 */

function selectProperties(objects, property){
  let res = [];
  for (const object of objects) {
    res.push(object[property]);
  }
  return res;
} // 1

/*
Schrijf een functie die voor een array van getallen (geheel of decimaal) zowel het kleinste als het grootste getal berekent.
Schrijf nu ook de functies `min` en `max` door zo weinig mogelijk nieuwe code te schrijven.
 */

function extremes(numbers){
  // Ik heb meneer De Wael gesproken en ik mocht de extremes functie
  // de min en max functie laten gebruiken inplaats van omgekeerd
  return {
    min: min(numbers),
    max: max(numbers)
  };
} // 2

function min(numbers){
  if (numbers.length <= 0) return NaN;
  let lowest = numbers[0];
  for (const number of numbers) {
    if (number < lowest){
      lowest = number;
    }
  }
  return lowest;
} // 1/2

function max(numbers){
  if (numbers.length <= 0) return NaN;
  let highest = numbers[0];
  for (const number of numbers) {
    if (number > highest){
      highest = number;
    }
  }
  return highest;
} // 1/2

/*
Scoring: 4 punten
`selectProperties`: 1 punt
`extremes`: 2 punt
`min`: 1/2 punt
`max`: 1/2 punt
 */
export {selectProperties, extremes, min, max};