import assert from "assert";

import {findByName, getAge, getOldest} from "../exercises/topic08_exam_like/age/resit-exam1819.js";

describe("People and ages", function () {
  describe("Find by Name", function () {
    it("Existing person, singleton", function () {
      assert.deepStrictEqual(findByName([{name:"Alice", age:123}], "Alice"), {name:"Alice", age:123});
    });

    it("Existing person (list of five)", function () {
      const ppl = [
        {name:"Alice", age:123},
        {name:"Bob", age:123},
        {name:"Carol", age:123},
        {name:"David", age:123},
        {name:"Eve", age:123}
      ];

      for (let person of ppl) {
        assert.deepStrictEqual(findByName(ppl, person.name), person);
      }

    });

    it("Non-Existing person", function () {
      assert.strictEqual(findByName([{name:"Alice", age:123}], "Bob"), null);
    });
  });

  describe("Get age", function () {
    it("Existing person", function () {
      assert.strictEqual(getAge([{name:"Alice", age:123}], "Alice"), 123);
    });

    it("Non-Existing person", function () {
      assert.strictEqual(getAge([{name:"Alice", age:123}], "Bob"), undefined);
    });
  });

  describe("Get oldest", function (){
    it("One", function () {
      assert.deepStrictEqual(getOldest([
        {name:"Alice", age:1},
        {name:"Bob", age:2},
        {name:"Carol", age:9},
        {name:"David", age:3},
        {name:"Eve", age:4}
      ]), [{name:"Carol", age:9}]);
    });

    it("Two", function () {
      assert.deepStrictEqual(getOldest([
        {name:"Alice", age:9},
        {name:"Bob", age:2},
        {name:"Carol", age:9},
        {name:"David", age:3},
        {name:"Eve", age:4}
      ]), [{name:"Alice", age:9}, {name:"Carol", age:9}]);
    });

    it("All", function () {
      const ppl = [
        {name:"Alice", age:123},
        {name:"Bob", age:123},
        {name:"Carol", age:123},
        {name:"David", age:123},
        {name:"Eve", age:123}
      ];
      assert.deepStrictEqual(getOldest(ppl), ppl);
    });
  });
});
