"use strict";

const { allLongestStrings, commonCharacterCount } = require("../main");

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
