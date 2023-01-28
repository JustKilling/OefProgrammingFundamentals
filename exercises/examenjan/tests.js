import assert from "assert";
import { drop, split, take } from "./v1.js";
import { selectProperties, extremes, min, max } from "./v2.js";
import {summarizePerWeek, generateDemoData} from "./v3.js";

describe("Exam", function () {
    describe("File V1", function () {

        describe("take", function () {

            it("None", function () {
                assert.deepStrictEqual(take(["a", "b", "c", "d", "e"], 0), []);
            });

            it("Less", function () {
                assert.deepStrictEqual(take(["a", "b", "c", "d", "e"], 2), ["a", "b"]);
            });

            it("All", function () {
                assert.deepStrictEqual(take(["a", "b", "c", "d", "e"], 5), ["a", "b", "c", "d", "e"]);
            });

            it("Too much", function () {
                assert.deepStrictEqual(take(["a", "b", "c", "d", "e"], 6), ["a", "b", "c", "d", "e"]);
            });

        });

        describe("drop", function () {

            it("None", function () {
                assert.deepStrictEqual(drop(["a", "b", "c", "d", "e"], 0), ["a", "b", "c", "d", "e"]);
            });

            it("Less", function () {
                assert.deepStrictEqual(drop(["a", "b", "c", "d", "e"], 2), ["c", "d", "e"]);
            });

            it("All", function () {
                assert.deepStrictEqual(drop(["a", "b", "c", "d", "e"], 5), []);
            });

            it("Too much", function () {
                assert.deepStrictEqual(drop(["a", "b", "c", "d", "e"], 6), []);
            });

        });

        describe("split", function () {

            it("Divisible", function () {
                assert.deepStrictEqual(split(["a", "b", "c", "d", "e", "f"], 2), [["a", "b"], ["c", "d"], ["e", "f"]]);
            });

            it("Not Divisible", function () {
                assert.deepStrictEqual(split(["a", "b", "c", "d", "e"], 2), [["a", "b"], ["c", "d"], ["e"]]);
            });

            it("All", function () {
                assert.deepStrictEqual(split(["a", "b", "c", "d", "e"], 5), [["a", "b", "c", "d", "e"]]);
            });

            it("Too much", function () {
                assert.deepStrictEqual(split(["a", "b", "c", "d", "e"], 6), [["a", "b", "c", "d", "e"]]);
            });

            it("None", function () {
                assert.deepStrictEqual(split(["a", "b", "c", "d", "e"], 0), []);
            });

        });

    });

    describe("File V2", function () {

        describe("selectProperties", function (){
            it("Empty array", function () {
                assert.deepStrictEqual(selectProperties([], "name"), []);
            });

            it("Select names", function () {
                assert.deepStrictEqual(selectProperties([
                    {name: "Alice", age : 100},
                    {name: "Bob", age : 101},
                    {name: "Carol", age : 102}
                ], "name"), ["Alice", "Bob", "Carol"]);
            });

            it("Select ages", function () {
                assert.deepStrictEqual(selectProperties([
                    {name: "Alice", age : 100},
                    {name: "Bob", age : 101},
                    {name: "Carol", age : 102}
                ], "age"), [100, 101, 102]);
            });

            it("Non existing property", function () {
                assert.strictEqual(selectProperties([
                    {name: "Alice", age : 100},
                    {name: "Bob", age : 101},
                    {name: "Carol", age : 102}
                ], "occupation").length, 3);
            });
        });

        describe("extremes", function (){
            it("All positive", function () {
                assert.deepStrictEqual(extremes([2,1,3]), {min:1,max:3});
            });

            it("All negative", function () {
                assert.deepStrictEqual(extremes([-2,-1,-3]), {min:-3,max:-1});
            });

            it("Mix", function () {
                assert.deepStrictEqual(extremes([-1,0,1]), {min:-1,max:1});
            });

            it("Decimal numbers", function () {
                assert.deepStrictEqual(extremes([3.14,0,-3.14]), {min:-3.14,max:3.14});
            });

            it("Empty", function () {
                assert.deepStrictEqual(extremes([]), {min:NaN,max:NaN});
            });

        });

        describe("min", function (){
            it("All positive", function () {
                assert.strictEqual(min([2,1,3]), 1);
            });

            it("All negative", function () {
                assert.strictEqual(min([-2,-1,-3]), -3);
            });

            it("Mix", function () {
                assert.strictEqual(min([-1,0,1]), -1);
            });

            it("Decimal numbers", function () {
                assert.strictEqual(min([3.14,0,-3.14]), -3.14);
            });

            it("Empty", function () {
                assert.strictEqual(min([]), NaN);
            });
        });

        describe("max", function (){
            it("All positive", function () {
                assert.strictEqual(max([2,1,3]), 3);
            });

            it("All negative", function () {
                assert.strictEqual(max([-2,-1,-3]), -1);
            });

            it("Mix", function () {
                assert.strictEqual(max([-1,0,1]), 1);
            });

            it("Decimal numbers", function () {
                assert.strictEqual(max([3.14,0,-3.14]), 3.14);
            });

            it("Empty", function () {
                assert.strictEqual(max([]), NaN);
            });
        });

    });

    describe("File V3", function () {
        describe("summarizePerWeek", function (){
            it("A year has 52 weeks and a few days", function (){
                assert.strictEqual(summarizePerWeek(generateDemoData()).length, 53);
            });

            it("Every week has summary for temperature", function (){
                const weekSummaries = summarizePerWeek(generateDemoData());
                for(const weekSummary of weekSummaries) {
                    assert.ok(weekSummary.temperature);
                    assert.strictEqual(typeof weekSummary.temperature.min, "number");
                    assert.strictEqual(typeof weekSummary.temperature.max, "number");
                    assert.ok(weekSummary.temperature.min <= weekSummary.temperature.max);
                }
            });

            it("Every week has summary for humidity", function (){
                const weekSummaries = summarizePerWeek(generateDemoData());
                for(const weekSummary of weekSummaries) {
                    assert.ok(weekSummary.humidity);
                    assert.strictEqual(typeof weekSummary.humidity.min, "number");
                    assert.strictEqual(typeof weekSummary.humidity.max, "number");
                    assert.ok(weekSummary.humidity.min <= weekSummary.humidity.max);
                }
            });


        });
    });
});
