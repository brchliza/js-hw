// 1. Функція підрахунку податку на прибуток
// function calcTax(income, taxRate) {
//   return income * (taxRate / 100);
// }
// console.log("Податок:", calcTax(10000, 18));


// 2. Функція-перевірка на парність
// function isEven(number) {
//   return number % 2 === 0;
// }
// console.log(isEven(4));



// 3. Порівняння чисел
// function compareNumbers(a, b) {
//   if (a > b) {
//     console.log(`${a} більше за ${b}`);
//   } else if (a < b) {
//     console.log(`${a} менше за ${b}`);
//   } else {
//     console.log(`${a} дорівнює ${b}`);
//   }
// }
// compareNumbers(10, 5);


// 4. Перевірка прав доступу
function checkAccess(level) {
  level = level.toLowerCase();
  if (level === "admin") {
    console.log("Можна виконувати всі дії.");
  } else if (level === "user") {
    console.log("Можна переглядати та редагувати власні дані.");
  } else if (level === "guest") {
    console.log("Можна лише переглядати публічну інформацію.");
  } else {
    console.log("Невідомий рівень доступу.");
  }
}

checkAccess("Admin");