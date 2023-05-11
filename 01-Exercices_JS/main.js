//EXERCICE 1 ==> IS IPv4 ADDRESS ?
// An IP address is a numerical label assigned to each device (e.g., computer, printer)
// participating in a computer network that uses the Internet Protocol for communication.
// There are two versions of the Internet protocol, and thus two versions of addresses.
// One of them is the IPv4 address.

// Given a string, find out if it satisfies the IPv4 address naming rules.

function isIPv4Address(inputString) {
  // your code here
}

// ---------------------------------------------------------------------------------------------

//EXERCICE 2 ==>  Are equally strong ?

// Call two arms equally strong if the heaviest weights they each are able to lift are equal.
// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left),
// and so are their weakest arms.
// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  // your code here
}

// ---------------------------------------------------------------------------------------------

// EXERCICE 3 ==>  Avoid Obstacles
// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

// Example

// For inputArray = [5, 3, 6, 7, 9], the output should be
// solution(inputArray) = 4.

function avoidObstacles(inputArray) {
  // your code here
}

// ---------------------------------------------------------------------------------------------

// EXERCICE 4 ==>  array Maximal Adjacent Difference

// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be
// solution(inputArray) = 3.

function arrayMaximalAdjacentDifference(inputArray) {
  // your code here
}
module.exports = {
  isIPv4Address,
  areEquallyStrong,
  avoidObstacles,
  arrayMaximalAdjacentDifference,
};
