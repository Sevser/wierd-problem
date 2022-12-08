/**
 * Create a function that:
 *    1. Receives an array of numbers and an integer number m.
 *      1.1 Constraints: numbers.length > m*2
 *
 *    2. Returns an array with the top m largest numbers which
 *       have no common digits with the lowest m numbers.
 *      2.1 There might not be enough numbers that fulfill this
 *          requirement in the numbers array. In that case, return
 *          the ones that do.
 *
 *
 *    Reminder: for the number 1993, it's digits are 1, 3 and 9.
 *
 * Examples:
 *
 * Ex1:
 * Input: [1, 2, 3, 4, 11, 12], 1
 * Output: [4]
 *
 * Ex2:
 * Input: [1, 2, 3, 4, 11, 12, 99], 2
 * Output: [99, 4]
 *
 * Ex3:
 * Input: [1, 2, 3, 4, 11, 12, 99, 205, 400], 3
 * Output: [400, 99, 4]
 */

function weird(nums, m) {
  const minDigits = nums.slice(0, m).reduce((acc, num) => {
    num.toString().split('').forEach(dig => {
      acc.add(dig);
    })
    return acc;
  }, new Set());
  const hasDigit = (num) => {
    return num.toString().split('').every(dig => !minDigits.has(dig));
  }
  return nums.slice(m).reverse().filter(hasDigit).slice(0, m)
}

console.log("Test Case 1:\t", weird([1, 2, 3, 4, 11, 12], 1));
console.log("Test Case 2:\t", weird([1, 2, 3, 4, 11, 12, 99], 2));
console.log("Test Case 3:\t", weird([1, 2, 3, 4, 11, 12, 99, 205, 400], 3));
console.log("Test Case 4:\t", weird([1, 2, 9, 11, 74, 56, 12, 99], 3));
console.log("Test Case 5:\t", weird([1, 2, 9, 3, 4, 11, 75, 56, 12, 99], 5));
console.log("Test Case 6:\t", weird([1, 1, 3, 3, 4, 11, 74, 56, 12, 99], 3));
console.log("Test Case 7:\t", weird([11, 12, 13, 99, 111, 121, 312, 444, 521, 637, 745], 3));
