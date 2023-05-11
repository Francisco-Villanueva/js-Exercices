"use strict";

const {
  isIPv4Address,
  areEquallyStrong,
  avoidObstacles,
  arrayMaximalAdjacentDifference,
} = require("../main");

describe("EXERCICE 1 => isIPv4Address()", () => {
  it("should return true if the inputString is a valid IPv4 address", () => {
    expect(isIPv4Address("172.16.254.1")).toBe(true);
  });
});

describe("EXERCICE 2 => areEquallyStrong()", () => {
  it("should return true if the two people are equally strong", () => {
    expect(areEquallyStrong(10, 15, 15, 10)).toBe(true);
    expect(areEquallyStrong(15, 10, 15, 10)).toBe(true);
    expect(areEquallyStrong(15, 10, 15, 9)).toBe(false);
  });
});

describe("EXERCICE 3 => avoidObstacles()", () => {
  it("should return the minimal length of the jump enough to avoid all the obstacles", () => {
    expect(avoidObstacles([5, 3, 6, 7, 9])).toBe(4);
    expect(avoidObstacles([2, 3])).toBe(4);
    expect(avoidObstacles([1, 4, 10, 6, 2])).toBe(7);
    expect(avoidObstacles([19, 32, 11, 23])).toBe(3);
  });
});

describe("EXERCICE 4 => arrayMaximalAdjacentDifference()", () => {
  it("should return the maximal absolute difference between any two of its adjacent elements", () => {
    expect(arrayMaximalAdjacentDifference([2, 4, 1, 0])).toBe(3);
    expect(arrayMaximalAdjacentDifference([1, 1, 1, 1])).toBe(0);
    expect(arrayMaximalAdjacentDifference([-1, 4, 10, 3, -2])).toBe(7);
    expect(arrayMaximalAdjacentDifference([10, 11, 13])).toBe(2);
  });
});
