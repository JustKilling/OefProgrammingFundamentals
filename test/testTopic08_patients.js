import assert from "assert";

import {
  indexOfFirstSymptomaticDay,
  indexOfLastSymptomaticDay,
  firstSymptomaticDay,
  lastSymptomaticDay
} from "../exercises/topic08_exam_like/patients/exam2021_patients_part1.js";

import {
  getIncubationDays, getSicknessDays, getRecoveredDays
} from "../exercises/topic08_exam_like/patients/exam2021_patients_part2.js";

import { hadSymptoms } from "../exercises/topic08_exam_like/patients/exam2021_patients_part3.js";



const myTestData1 = [
  {"date": "2021/01/01", "symptoms": false},
  {"date": "2021/01/02", "symptoms": false},
  {"date": "2021/01/03", "symptoms": false},
  {"date": "2021/01/04", "symptoms": false},
  {"date": "2021/01/05", "symptoms": true},
  {"date": "2021/01/06", "symptoms": false},
  {"date": "2021/01/07", "symptoms": false},
  {"date": "2021/01/08", "symptoms": true},
  {"date": "2021/01/09", "symptoms": true},
  {"date": "2021/01/10", "symptoms": false}
];

const myTestData2 = [
  {"date": "2021/01/01", "symptoms": false},
  {"date": "2021/01/02", "symptoms": true},
  {"date": "2021/01/03", "symptoms": true},
  {"date": "2021/01/04", "symptoms": false},
  {"date": "2021/01/05", "symptoms": true},
  {"date": "2021/01/06", "symptoms": false},
  {"date": "2021/01/07", "symptoms": false},
  {"date": "2021/01/08", "symptoms": false},
  {"date": "2021/01/09", "symptoms": false},
  {"date": "2021/01/10", "symptoms": false}
];

const myTestData3 = [
  {"date": "2021/01/01", "symptoms": false},
  {"date": "2021/01/02", "symptoms": false},
  {"date": "2021/01/03", "symptoms": false},
  {"date": "2021/01/04", "symptoms": false},
  {"date": "2021/01/05", "symptoms": false},
  {"date": "2021/01/06", "symptoms": false},
  {"date": "2021/01/07", "symptoms": false},
  {"date": "2021/01/08", "symptoms": true},
  {"date": "2021/01/09", "symptoms": false},
  {"date": "2021/01/10", "symptoms": true}
];

const myTestDataNoSymptoms = [
  {"date": "2021/01/01", "symptoms": false},
  {"date": "2021/01/02", "symptoms": false},
  {"date": "2021/01/03", "symptoms": false},
  {"date": "2021/01/04", "symptoms": false},
  {"date": "2021/01/05", "symptoms": false},
  {"date": "2021/01/06", "symptoms": false},
  {"date": "2021/01/07", "symptoms": false},
  {"date": "2021/01/08", "symptoms": false},
  {"date": "2021/01/09", "symptoms": false},
  {"date": "2021/01/10", "symptoms": false}
];


describe("Patients", function () {
  describe("Part I", function () {
    describe("Index of first symptomatic day", function () {
      it("Simple", function (){
        assert.strictEqual(indexOfFirstSymptomaticDay(myTestData1), 4);
        assert.strictEqual(indexOfFirstSymptomaticDay(myTestData2), 1);
      });
      it("None", function () {
        assert.ok(isNaN(indexOfFirstSymptomaticDay(myTestDataNoSymptoms)));
      });
    });

    describe("First symptomatic date", function () {
      it("Simple", function (){
        assert.strictEqual(firstSymptomaticDay(myTestData1), "2021/01/05");
        assert.strictEqual(firstSymptomaticDay(myTestData2), "2021/01/02");
      });

      it("None", function () {
        assert.strictEqual(firstSymptomaticDay(myTestDataNoSymptoms), undefined);
      });
    });

    describe("Index of last symptomatic day", function () {
      it("Simple", function (){
        assert.strictEqual(indexOfLastSymptomaticDay(myTestData1), 8);
        assert.strictEqual(indexOfLastSymptomaticDay(myTestData2), 4);
      });

      it("None", function () {
        assert.ok(isNaN(indexOfLastSymptomaticDay(myTestDataNoSymptoms)));
      });
    });

    describe("Last symptomatic date", function () {
      it("Simple", function (){
        assert.strictEqual(lastSymptomaticDay(myTestData1), "2021/01/09");
        assert.strictEqual(lastSymptomaticDay(myTestData2), "2021/01/05");
      });

      it("None", function () {
        assert.strictEqual(lastSymptomaticDay(myTestDataNoSymptoms), undefined);
      });
    });
  });

  describe("Part II", function () {
    describe("Incubation", function () {
      it("Range", function () {
        assert.deepStrictEqual(getIncubationDays(myTestData1),[
          {"date": "2021/01/01", "symptoms": false},
          {"date": "2021/01/02", "symptoms": false},
          {"date": "2021/01/03", "symptoms": false},
          {"date": "2021/01/04", "symptoms": false}
        ]);
      });

      it("Empty", function () {
        assert.deepStrictEqual(getIncubationDays(myTestDataNoSymptoms), []);
      });
    });

    describe("Sickness", function () {
      it("Range", function () {
        assert.deepStrictEqual(getSicknessDays(myTestData1),[
          {"date": "2021/01/05", "symptoms": true},
          {"date": "2021/01/06", "symptoms": false},
          {"date": "2021/01/07", "symptoms": false},
          {"date": "2021/01/08", "symptoms": true},
          {"date": "2021/01/09", "symptoms": true}
        ]);
      });

      it("Empty", function () {
        assert.deepStrictEqual(getSicknessDays(myTestDataNoSymptoms), []);
      });
    });

    describe("Recovered", function () {
      it("Range", function () {
        assert.deepStrictEqual(getRecoveredDays(myTestData1),[
          {"date": "2021/01/10", "symptoms": false}
        ]);
      });

      it("Empty", function () {
        assert.deepStrictEqual(getRecoveredDays(myTestDataNoSymptoms), []);
      });
    });
  });

  describe("Part III", function () {
    describe("Had Symptom", function () {
      it("Present", function () {
        for(let entry of myTestData3) {
          assert.strictEqual(hadSymptoms(myTestData3, entry.date), entry.symptoms);
        }
      });

      it("Absent", function () {
        assert.strictEqual(hadSymptoms(myTestData3, "2020/12/31"), undefined);
        assert.strictEqual(hadSymptoms(myTestData3, "2021/01/11"), undefined);
      });
    });
  });
});

