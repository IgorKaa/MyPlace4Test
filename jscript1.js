'use strict';
let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD","YYYY-MM-DD");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let statExp1 = prompt("Введите обязательную статью расходов в этом месяце","");
let costExp1 = +prompt("Во сколько обойдется?","");
let statExp2 = prompt("Введите обязательную статью расходов в этом месяце","");
let costExp2 = +prompt("Во сколько обойдется?","");

appData.expenses.statExp1 = costExp1;
appData.expenses.statExp2 = costExp2;

alert (appData.budget / 30);