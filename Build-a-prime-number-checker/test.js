const isPrime = require('./index');

console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(4));   // false
console.log(isPrime(7));   // true
console.log(isPrime(10));  // false
console.log(isPrime(3.5)); // false
console.log(isPrime(1));   // false