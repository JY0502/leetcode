/*
 * Write a function that generates every sequence of throws a single
 * player could throw over a three-round game of rock-paper-scissors.
 *
 * Your output should look something like:
 *   ["RRR",
 *    "RRP",
 *    "RRS",
 *    "RPR",
 *    ...etc...
 *   ]
 *
 * Extra credit:
 *   - Make your function return answers for any number of rounds.
 *
 * Example:
 * rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
 *
 */

var rockPaperScissors = function (n) {
  const allComb = [];
  const combinations = (str) => {
    if (str.length === n) {
      allComb.push(str);
    } else {
      combinations(str + "R");
      combinations(str + "P");
      combinations(str + "S");
    }
  };
  combinations("");
  return allComb;
};
