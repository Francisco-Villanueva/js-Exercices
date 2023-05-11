// EXERCICE 1 => All Longest Strings
// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].

function allLongestStrings(inputArray) {
  // your code here
}

// ---------------------------------------------------------------------------------------------

// EXERCICE 2 ==>  Common Character Count
// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

function commonCharacterCount(s1, s2) {
  // your code here
}

// ---------------------------------------------------------------------------------------------

// EXERCICE 3 ==> Reverse in Parentheses
// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

// Examples:

// For inputString = "(bar)", the output should be
// solution(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// solution(inputString) = "foorabbaz";

function reverseInParentheses(inputString) {
  // your code here
}

// ---------------------------------------------------------------------------------------------

// EXERCICE 4 ==> Sort by Height

// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

function sortByHeight(a) {
  // your code here
}
module.exports = {
  allLongestStrings,
  commonCharacterCount,
  reverseInParentheses,
};
