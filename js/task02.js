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

/*
*  Функция ниже возвращает true, если параметр age больше 18,
*  в ином случае она задает вопрос через confirm и возвращает его
*  результат.

* Перепишите функцию, чтобы она делала тоже самое, но без if, в одну строку.
* P.S :  Используй тернарный(условный) оператор "?" ":"
*/

// !!! Function Declaration

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?')
//     }
// }


// !!! Arrow Functions

// const checkAge = (age) =>
//   age > 18 ? () => true : () => confirm("Родители разрешили?");


// !!! Function Declaration with Ternary operator

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
// }


/*
* Напишите функцию min(a, b) , которая возвращает меньшее из чисел a и b.

* Пример вызовов и что в итоге должно получиться:
* -//- min(2, 5) результат -->>> (== 2)
* -//- min(3, -1) результат -->>> (== -1)
* -//- min(1, 1) результат -->>> (== 1)
*/


// !!! Function Declaration with Ternary operator

// function min(a, b) {
//     return (a < b) ? a : b;
// }

// alert(min(2, 5)); // 2
// alert(min(3, -1)); // -1
// alert(min(1, 1)); // 1


// !!! Arrow Functions with Ternary operator

// const min = (a, b) => a < b ? a : b;

// alert(min(2, 5)); // 2
// alert(min(3, -1)); // -1
// alert(min(1, 1)); // 1

