"use strict";

/*
 * Перепишите Function Declaration и замените код на стрелочную-функцию =>
 * чтобы он также работал как и через объявление функции.
 */

// !!! Function Declaration

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//      else no();
// }

// ask(
//     'Вы согласны?',
//     function() {alert('Вы согласились!');},
//     function(){alert('Вы отменили выполнение!!!');}
// );


// !!! Arrow Functions

// const ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
// }

// ask(
//     'Вы согласны?',
//     () => {alert('Вы согласились!');},
//     () => {alert('Вы отменили выполнение!!!');}
// );


/*
* Доп.пример для закрепления стрелочных функций:

* Перепишите код через стрелочные функции с применением тернарного оператора,
* без использования if(ов) и function declaration.
*/ 

// !!! Function Declaration with if()

// const age = prompt("Сколько Вам лет?", 18);
// let welcome;

// if (age < 18) {

// welcome = function() {
// alert("Привет!");
// };

// } else {
// welcome = function() {
// alert("Здравствуйте!");
// };
// }
// welcome();

// !!! Arrow Functions with Ternary operator

// const age = prompt("Сколко вам лет?", 18);
// const welcome =
//   age < 18 ? () => alert("Привет ;)") : () => alert("Здраствуйте!");
// welcome();
