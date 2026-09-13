# Prime Number Checker

A simple JavaScript function that checks whether a given number is a prime number.

## Description

The `isPrime` function determines whether a number is prime.

A prime number is a whole number greater than 1 that can only be divided evenly by 1 and itself.

## Features

* Checks whether a number is prime.
* Rejects numbers less than or equal to 1.
* Rejects decimal numbers.
* Efficiently checks divisors only up to the square root of the number.
* Exports the function using `module.exports`.

## Examples

```js
isPrime(2);   // true
isPrime(3);   // true
isPrime(4);   // false
isPrime(7);   // true
isPrime(10);  // false
isPrime(3.5); // false
isPrime(1);   // false
```

## Technologies

* JavaScript
* Node.js

## Usage

Run the JavaScript file with Node.js:

```bash
node filename.js
```

## Function

```js
function isPrime(num) {
  if (num <= 1 || !Number.isInteger(num)) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
```
