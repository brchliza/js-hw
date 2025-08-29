// function divisors(n) {
//   const res = [];
//   for (let d = 1; d * d <= n; d++) {
//     if (n % d === 0) {
//       res.push(d);
//       if (d * d !== n) res.push(n / d);
//     }
//   }
//   return res.sort((a, b) => a - b);
// }
// function rangeDivisors(A, B) {
//   for (let n = A; n <= B; n++) {
//     const ds = divisors(n);
//     console.log(`${n}: ${ds.join(' ')} | кількість = ${ds.length}`);
//   }
// }
// rangeDivisors(10, 15);


function primesUpTo(limit) {
  const isPrime = Array(limit + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let p = 2; p * p <= limit; p++) {
    if (isPrime[p]) {
      for (let m = p * p; m <= limit; m += p) isPrime[m] = false;
    }
  }
  const primes = [];
  for (let i = 2; i <= limit; i++) if (isPrime[i]) primes.push(i);
  return primes;
}

const primes = primesUpTo(1000);
console.log('Прості числа (включно з 2):');
console.log(primes.join(' '));

const primesWithout2 = primes.filter(n => n !== 2);
console.log('Прості числа (без 2):');
console.log(primesWithout2.join(' '));