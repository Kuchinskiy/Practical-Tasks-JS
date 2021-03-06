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

/*
* Используйте стрелочную функцию чтобы отобразить в консоле неограниченое
* к-во кошачьих мордочек, а также потренируйтесь записывать отображение
* в консоли через конкатынацию строк и шаблонные строки.
*/
// !!! Arrow Function with a cycle 'for'

// const drawCats = howManyTimes => {
//     for (let i = 0; i < howManyTimes; i++) {
//         console.log(i + ' =^.^='); // через конкатынацию
//         console.log(`${[i]} К-во: =^.^=`); // через шаблонные строки
//     }
// };
// drawCats(7);


/*
* Совпадают ли массивы??? 
* Напишите функцию 'areArraysSame' которая принимает два массива
* с числами в качестве аргументов и возвращает 'true' если одинаковые
* или 'false' если различаются.
*/

// !!! Function Declaration

// function areArraysSame(arr, array) {

//   if (arr.length !== array.length) {
//     return false;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== array[i]) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(areArraysSame([1, 2, 3], [4, 5, 6])); // false
// console.log(areArraysSame([1, 2, 3], [1, 2, 3])); // true
// console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4])); // false


// !!! Передача по значению т.е посредством копирования

function doIt(param) {
  param = 2;

  return value;
}

const value = 1;
console.log(doIt(value)); // аргумент КОПИРУЕТСЯ в локальную переменную(парметр);


const age = 7;

function addOne (x) { // 'x' содержит копию ИСХОДНОГО значения переменной 'age';
  x = x * 3;

  return x;
}

console.log(addOne(age)); // копируется ЗНАЧЕНИЕ 'age' в параметр 'x';


//!!!  Пошаговое выполнение функции с командой 'return';
/*
* Наглядный пример передачи управления из одной точки кода(программы) в другую,
* при вызове функции и возврате значения.
*/
const radius = 5.2; 

function calcArea (r) {
  let area;

  if (r <= 0) {

    return 0;

  } else {
    area = Math.PI * r * r; // вычисляется площадь круга;

    return area; // возвращает вычисленое значение и прекращает свое выполнение;
  } // после чего выполнение кода начинается со следующей строки;
}

const theArea = calcArea(radius); // передаем функции 'calcArea' в пареметр 'r' значение переменной 'radius';
// сохраняем значение возвращаемое функцией в переменную 'theArea';

console.log(`The area is: ${theArea}`); // следующея строка после функции;

