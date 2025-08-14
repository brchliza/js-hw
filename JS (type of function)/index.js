function analyzeNumber(num) {
  let digits = num.toString().split("").map(Number);

  let count = digits.length;
  let max = Math.max(...digits);
  let min = Math.min(...digits);
  let sum = digits.reduce((acc, digit) => acc + digit, 0);

  return { count, max, min, sum };
}


let result = analyzeNumber("2374597543875345873498");

console.log("Кількість цифр:", result.count);
console.log("Найбільша цифра:", result.max);
console.log("Найменша цифра:", result.min);
console.log("Сума всіх цифр:", result.sum);