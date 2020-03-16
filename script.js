"use strict";
let money;
let time;
start();

function start() {
  money = +prompt("Ваш бюджет на месяц?");
  time = prompt("Введите дату в формате YYYY-MM-DD");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?");
  }
}

const appData = {
  budjet: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function() {
    for (let i = 0; i < 2; i++) {
      let question = prompt(
        "Введите обязательную статью расходов в этом месяце",
        ""
      );
      let answer = +prompt("Во сколько обойдется?", "");

      if (
        question != "" &&
        typeof question === "string" &&
        typeof question != null &&
        answer != "" &&
        typeof answer != null &&
        question.length < 50
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
  },
  detectDayBudget: function() {
    appData.moneyPerDay = +(appData.budjet / 30).toFixed();
    alert("Ежедневный бюджет " + appData.moneyPerDay);
  },
  detectLevel: function() {
    if (appData.moneyPerDay <= 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    }
  },
  checkSavings: function() {
    if (appData.savings) {
      const save = +prompt("Какова сумма накоплений?");
      const percent = +prompt("Под какой процент? ");
      appData.monthIncome = (save / 100 / 12) * percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function() {
    for (let i = 0; i < 3; i++) {
      let key = i + 1;
      appData.optionalExpenses[key] = prompt("Статья необязательных расходов?");
    }
  },
  chooseIncome: function() {
    let items = prompt(
      "Что принесет дополнительны доход? (Перечислите через запятую)",
      ""
    );
    while ((items == "", typeof items !== "string", items == null)) {
      items = prompt(
        "Что принесет дополнительны доход? (Перечислите через запятую)",
        ""
      );
    }
    appData.income = items.split(", ");
    appData.income.push(prompt("Может что-то еще?"));
    appData.income.sort();
    let additionalIncome = "";
    appData.income.forEach(function(el, i) {
      additionalIncome += `${i + 1}) ${el} `;
    });
    alert(`Способы доп. заработка: ${additionalIncome}`);
  }
};
let res = "";
for (let key in appData) {
  // res += `${key}: ${appData[key]}, `; с перечеслением всех свойств
  res += `${key}, `;
}
console.log(`Наша программа включает в себя данные: ${res}`);
