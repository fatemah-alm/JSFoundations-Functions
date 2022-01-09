/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  console.log(`Hello ${name}`);
}

greet("Hamza");

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  if(n%2 == 1) {
return true;
  }
  else {
    return false;
  }
}
isOdd(5);
isOdd(8);

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  let smallerno;
  if (n%2 == 1) {
    smallerno = (n-1)/2;
    return smallerno;
      }
      else {
        smallerno = n/2;
        return smallerno;
      }
}

oddsSmallerThan(7);
oddsSmallerThan(8);
oddsSmallerThan(50);

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if (n%2 == 1) {
    return n*n;
  }
  else if (n%2 == 0) {
    return n*2;
  }

  squareOrDouble(16);
squareOrDouble(9);
}

module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
