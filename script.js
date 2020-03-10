"use strict";
let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

const appData = {
  budjet: money,
  time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};
// вариант с for

for (let i = 0; i < 2; i++) {
  let question = prompt(
    "Введите обязательную статью расходов в этом месяце",
    ""
  );
  let answer = +prompt("Во сколько обойдется?", "");
  if (
    question != "" &&
    typeof question != null &&
    answer != "" &&
    answer != NaN &&
    // не срабатывает проверка с NaN, надо вернуться к этому чуть позже
    typeof answer != null
  ) {
    console.log("done");
    appData.expenses[question] = answer;
  } else if (question == "" || typeof question === null) {
    i--;
    alert("Неверная задача! повторите ввод!");
    console.error("Данные введены некорректно!");
  } else if (answer == "" || typeof answer === null) {
    i--;
    alert("Неверное значение! Повторите ввод!");
    console.error("Данные введены некорректно!");
  }
}

// вариант с while
// let i = 0;
// while (i < 2) {
//   let question = prompt(
//     "Введите обязательную статью расходов в этом месяце",
//     ""
//   );
//   let answer = +prompt("Во сколько обойдется?", "");
//   if (
//     question != "" &&
//     answer != "" &&
//     typeof question != null &&
//     typeof answer != null
//   ) {
//     console.log("done");
//     appData.expenses[question] = answer;
//   } else {
//     i--;
//     console.error("Данные введены некорректно!");
//   }

//   i++;
//   console.log(i);
// }

//Вариант с do while
// let i = 0;
// do {
//   let question = prompt(
//     "Введите обязательную статью расходов в этом месяце",
//     ""
//   );
//   let answer = +prompt("Во сколько обойдется?", "");
//   if (
//     question != "" &&
//     answer != "" &&
//     typeof question != null &&
//     typeof answer != null
//   ) {
//     console.log("done");
//     appData.expenses[question] = answer;
//   } else {
//     i--;
//     console.error("Данные введены некорректно!");
//   }

//   i++;
//   console.log(i);
// } while (i < 2);

appData.moneyPerDay = Math.round(appData.budjet / 30);
alert("Ежедневный бюджет " + appData.moneyPerDay);

//Требуется использовать <= вместо < т.к. если бюджет 3000, то moneyPerDay == 100, и происходит ошибка.
if (appData.moneyPerDay <= 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}

console.log(appData);
