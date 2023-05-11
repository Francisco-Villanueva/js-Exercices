"use strict";

const {
  allLongestStrings,
  commonCharacterCount,
  reverseInParentheses,
  sortByHeight,
} = require("../main");

describe("EXERCICE 1 => allLongestStrings()", () => {
  it("should return an array ", () => {
    const res = allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]);
    expect(Array.isArray(res)).toEqual(true);
  });
  it("should return another array containing all of its longest strings", () => {
    expect(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])).toEqual([
      "aba",
      "vcd",
      "aba",
    ]);
    expect(allLongestStrings(["aa"])).toEqual(["aa"]);
    expect(allLongestStrings(["enyky", "benyky", "yely", "varennyky"])).toEqual(
      ["varennyky"]
    );
    expect(allLongestStrings(["abacaba", "abacab", "abac", "xxxxxx"])).toEqual([
      "abacaba",
    ]);
    expect(allLongestStrings(["onsfnib", "aokbcwthc", "jrfcw"])).toEqual([
      "aokbcwthc",
    ]);
  });
});

describe("EXERCICE 2 => commonCharacterCount()", () => {
  it("should return the number of common characters between two strings", () => {
    expect(commonCharacterCount("aabcc", "adcaa")).toBe(3);
    expect(commonCharacterCount("zzzz", "zzzzzzz")).toBe(4);
    expect(commonCharacterCount("abca", "xyzbac")).toBe(3);
    expect;
  });
});

describe("EXERCICE 3 => reverseInParentheses()", () => {
  it("should return a string", () => {
    const res = reverseInParentheses("asdas(asdasd)asda");
    expect(typeof res).toBe("string");
  });
  it("should return the characters, which are enclosed in parentheses, reversed", () => {
    expect(reverseInParentheses("carlos(pez)gomez")).toBe("carloszepgomez");
  });
});
describe("EXERCICE 3 => sortByHeight()", () => {
  it("should return an array", () => {
    const res = sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
    expect(Array.isArray(res)).toBe(true);
  });
  it("should return the input array sorted, without moving the trees (-1) ", () => {
    expect(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])).toBe([
      -1, 150, 160, 170, -1, -1, 180, 190,
    ]);
    expect(sortByHeight([-1, -1, -1, -1, -1])).toBe([-1, -1, -1, -1, -1]);
    expect(
      sortByHeight([2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1])
    ).toBe([1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2]);
    expect(sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3])).toBe([
      1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77,
    ]);
  });
});
