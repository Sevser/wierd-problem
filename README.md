# wierd-problem
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
