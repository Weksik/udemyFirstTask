"use strict";
let money = +prompt("Ваш бюджет на месяц?");
console.log(money);
let time = prompt("Введите дату в формате YYYY-MM-DD");

const appData = {
  budjet: money,
  time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

function checkCosts() {
  for (let i = 0; i < 2; i++) {
    console.log("i = " + i + " в начале цикла");
    let question = prompt(
      "Введите обязательную статью расходов в этом месяце",
      ""
    );
    let answer = +prompt("Во сколько обойдется?", "");
    if (
      question != "" &&
      answer != "" &&
      typeof question != null &&
      typeof answer != null
    ) {
      console.log("done");
      appData.expenses[question] = answer;
      console.log(i);
    } else {
      console.error("Данные введены некорректно!");
      console.log("i = " + i + " в конце цикла");
      return i, checkCosts();
    }
  }
}

checkCosts();

appData.moneyPerDay = Math.round(appData.budjet / 30);
alert("Ежедневный бюджет " + appData.moneyPerDay);

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
