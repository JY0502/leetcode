/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function (n) {
  if (typeof n !== "number" || n < 1 || n % 1 !== 0) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  // TODO: return true if n is prime, false otherwise
  if (n === 1) {
    return false;
  }

  let m = 2;
  while (n >= m * m) {
    if (n % m === 0) {
      return false;
    }
    m++;
  }
  return true;
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {
  const primes = [2];
  let m = 3;
  while (end >= m) {
    // console.log(m);
    // console.log(primes);
    let isPrime = true;
    for (let i = 0; i < primes.length; i++) {
      if (m % primes[i] === 0) {
        // console.log(m, primes[i]);
        isPrime = false;
      }
    }
    if (isPrime) {
      primes.push(m);
    }
    m++;
  }
  const primeList = [];
  for (let i = 0; i < primes.length; i++) {
    if (primes[i] >= start) {
      primeList.push(primes[i]);
    }
  }
  return primeList;
};

const a = primeTester(15485867 * 15485867);
console.log(a);
// const b = primeSieve(10, 10000);
// console.log(b);
