// let age = prompt('Введіть свій рік');
// if(age >= 0 && age <=2){
//  alert("Ви дитина");
// }else if(age >= 12 && age <=18){
//     alert("Ви підліток");
// }else if(age >=18 && age<=60){
//     alert("Ви дорослий");
// }else if(age> 60){
//     alert("Ви пенсіонер")
// } else {
//   alert("Некоректний вік");
// }

// 2. Відповідність числа спецсимволу
// let num = +prompt("Введіть число від 0 до 9:");
// let symbols = {0: ")", 1: "!", 2: "@", 3: "#", 4: "$", 5: "%", 6: "^", 7: "&", 8: "*", 9: "("};
// alert(`На цій клавіші символ: ${symbols[num] ?? "Невірне число"}`);

// 3. Розрахунок знижки
// let amount = +prompt("Введіть суму покупки:");
// let discount = 0;
// if (amount >= 200 && amount < 300) {
//   discount = 3;
// } else if (amount >= 300 && amount < 500) {
//   discount = 5;
// } else if (amount >= 500) {
//   discount = 7;
// }
// let finalPrice = amount - (amount * discount / 100);
// alert(`Сума до оплати: ${finalPrice.toFixed(2)} грн (знижка ${discount}%)`);

// 4. Перевірка на високосний рік
// let year = +prompt("Введіть рік:");
// if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//   alert(`${year} - високосний рік`);
// } else {
//   alert(`${year} - не високосний рік`);
// }

// 5. Наступна дата
// let day = +prompt("Введіть день:");
// let month = +prompt("Введіть місяць:");
// let yearDate = +prompt("Введіть рік:");

// let date = new Date(yearDate, month - 1, day);
// date.setDate(date.getDate() + 1);

// alert(`Наступна дата: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`);