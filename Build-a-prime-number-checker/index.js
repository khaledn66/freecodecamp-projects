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

module.exports = isPrime;

//console.log(isPrime(4));   // false
//console.log(isPrime(7));   // true
//console.log(isPrime(10));  // false
console.log(isPrime(3.5)); // false
//console.log(isPrime(1));   // false
