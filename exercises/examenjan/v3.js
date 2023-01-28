/*
Elke meting bevat een datum (`date`) en één meting voor temperatuur en één voor vochtigheid.
Voorbeeld:
```
    {
        date: { year: 2023, month: 1, day: 3 },
        temperature: 6,
        humidity: 45.604
    }
```

Deze metingen worden voor een volledig jaar bijgehouden in één grote array (dus 365 of 366 metingen, al doet het exacte aantal metingen er eigenlijk niet toe)

Schrijf de functie `summarizePerWeek` die een array van metingen verwacht en een samenvatting per week teruggeeft:
Je mag/moet ervan uitgaan dat de eerste meting in de array de eerste dag is van een week, en dat alle metingen opelkaar volgen en geen gaten bevatten.
Je kan een samenvatting per week bereken door voor elke 7 opeenvolgende metingen de minimum en maximum meting (voor elke soort meting)
in een array te stoppen. Voor een jaar aan metingen krijg je dus een array van 53 (365/7=52.14) elementen terug, één voor elke week.

De datum wordt genegeerd, maar voor elke week willen we dus voor temperatuur en vochtigheid het minimum en het maximum zien.
Voorbeeld:
```
    [
        { // first week
            temperature: { min: -2, max: 15 },
            humidity: { min: 4.1319556493686616, max: 90.25727363205631 }
        },
        { // second week
            temperature: { min: -1, max: 16 },
            humidity: { min: -4.40073592006109, max: 79.24763752639248 }
        },
        { // third week
            temperature: { min: 4, max: 23 },
            humidity: { min: 18.56039790570479, max: 64.49477809809375 }
        },
        { // fourth week
            temperature: { min: -3, max: 24 },
            humidity: { min: -0.48482496460599656, max: 88.70471719273642 }
        },
        ... // other weeks.
    ];
```


Tenslotte willen we ook nog weten wat de koudste gemeten temperatuur was (min) en
wat de vochtigste gemeten waarde was (max). Vul hiervoor de functie `show()` aan.

Verder mag je voor deze oefening ook zelf gebruik maken van `generateDemoData()` om fake-test data te genereren voor één jaar.
De testen gebruiken dezelfde fucntie om test data te genereren.
 */

/* Given code: do not change */
import {split} from "./v1.js";
import {extremes, max, min, selectProperties} from "./v2.js";

function generateDemoData() {
  let demoData = [];
  let DAYS_PER_MONTH = [undefined, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let month = 1; month <= 12; month++) {
    for (let day = 1; day <= DAYS_PER_MONTH[month]; day++) {
      demoData.push({
        date: {year: 2023, month: month, day: day},
        temperature: Math.round((Math.random() * 30) - 5),
        humidity: (Math.random() * 100) - 5
      });
    }
  }
  return demoData;
}

/* End Given code: do not change */

function summarizePerWeek(data) {
  const WEEK_LENGTH = 7;
  //split the year into an array of weeks
  let yearInWeeks = split(data, WEEK_LENGTH);
  let summary = [];
  for (const weekInYear of yearInWeeks) {
    //add summary object for each week
    summary.push({
      //first select all temperature/humidity values in the week then take the extreme values
      temperature : extremes(selectProperties(weekInYear, "temperature")),
      humidity : extremes(selectProperties(weekInYear, "humidity"))
    });
  }
  return summary;
}

/* Given code: improve */
function showInfo(data) {  // 2
  const count = data.length;
  const coldest = min(selectProperties(data, "temperature"));
  const wettest = max(selectProperties(data, "humidity"));
  console.log("Er zijn " + count + " metingen uitgevoerd");
  console.log("De koudste temperatuur in deze data is " + coldest);
  console.log("De vochtigste meting in deze data is " + wettest);
}

showInfo(generateDemoData());

/* End Given code: improve */

/*
Scoring: 6 punten
`summarizePerWeek`: 2 punten
`show`: 2 punten
Stijl en structuur: 2 punten
 */
export {summarizePerWeek, generateDemoData};

