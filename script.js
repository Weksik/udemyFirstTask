"use strict";
let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let firstPayment = prompt("Введите обязательную статью расходов в этом месяце");
let firstCost = +prompt("Во сколько обойдется?");
let secondPayment = prompt(
  "Введите ещё одну статью расходов в этом месяце",
  ""
);
let secondCost = +prompt("Во сколько обойдется?", "");

const appData = {
  money,
  time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

appData.expenses[firstPayment] = firstCost;
appData.expenses[secondPayment] = secondCost;

let Budjet = appData.money - firstCost - secondCost;
let daylyBudjet = Math.round(Budjet / 30);

console.log(appData);
alert("Бюджет на день с учетом всех расходов " + daylyBudjet + " рублей");
