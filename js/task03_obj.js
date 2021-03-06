"use strict";

/*
 * Создайте объект user;
 * Добавьте свойство name со значением John;
 * Добавьте свойство surname со значением Smith;
 * Измените значение свойства name на Pete;
 * Удалите свойство name из объекта;
 */

// const user = {
//     name: 'Jhon',
//     surname: 'Smith',
//     age: 37,
//     gender: 'male',
// };
// console.log(user.name); // Jhon

// Перезаписать значение свойства 'name'
// user.name = 'Pete';
// console.log(user.name); // Pete

// Удалить свойство 'name' из объекта
// delete user.name
// console.log(user.name); // undefined

// const key = prompt('Что вы хотите узнать о пользователе?', '');

// Доступ к свойству через переменную
// alert( user[key] ); // Jhon (если ввели 'name')

// ------------------------------------------------------------------------------------------------------------

/*
 * Напишите функцию isEmpty(obj) , которая возвращает true ,
 * если у объекта нет свойств, иначе false .
 */

// function isEmpety(obj) {

//     for (let key in obj) {
//        if (obj.hasOwnProperty(key)) {
//       return false;
//      }
//   }
//   return true;
// }

// let schedule = {};
// console.log(schedule);
// alert(isEmpety(schedule)); // true (ДА, obj БЕЗ свойств(пустой))
// цикл "for" НЕ встретил свойства;
// !!! Для пустого объекта возвращает "true"

// schedule['8:30'] = 'get up';
// console.log(schedule);
// alert(isEmpety(schedule)); // false (НЕТ, obj не пустой СО свойствами(имеються))
// цикл "for" ВСТРЕТИЛ свойства;
// !!! Если свойство в объекте существует возвращает "false"

// ------------------------------------------------------------------------------------------------------------

/*
 * Можно ли изменить объект, объявленный через "const"? Как вы думаете?
 */

// const user = {
//     name: 'Jhon',
// };

// Сработает или нет ?
// user.name = 'Pete'; //  Да, конечно БЕЗ ПРОБЛЕМ, вносим изменения в содержимое объекта!!!

// user = 123; // Будет ОШИБКА, попытка поментя ссылку в памяти!!!

/*
!!! "const" - защищает саму переменную(user) от изменений, так как переменная
!!! "user" -->> хранит ССЫЛКУ на объект котрую НЕЛЬЗЯ изменить!
* Само содержимое объекта можно изменять (удалить, добавить, поменять итп...);
*/

// ------------------------------------------------------------------------------------------------------------

/*
 * Напишите код для суммирования всех зарплат и сохраните результат в переменной "sum".
 * Результат должен получиться -->> 390.
 * Если объект "salaries" пуст, то результат должен быть 0.
 */

// let salaries = {
//   Jhon: 100,
//   Ann: 160,
//   Peter: 130,
// };

// Version - 1
// let summ = 0;

// for (let key in salaries) {
//     summ += salaries[key]
// }

// console.log(`Result: ${summ}`);

// Version - 2
// let total = 0;

// function makeSumm(obj) {
//   obj = Object.values(salaries);

//   if (obj.hasOwnProperty(salaries.key)) {
//      return 0;
//   }

//   for (const velue of obj) {
//       total += velue;
//   }
//   return total;
// }

// let sum = makeSumm();
// console.log(`Total: ${sum}`); // 390 или 0 -->>  если объект пуст;

// ------------------------------------------------------------------------------------------------------------

/*
* Создайте функцию multiplyNumeric(obj) , которая умножает все числовые свойства
* объекта obj на число 2.

* Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует
* напрямую изменять объект.
* P.S. Используйте typeof для проверки, что значение свойства числовое.
*/

// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// console.log(menu); // числовые свойства до: 200, 300;

// function multiplyNumeric(obj) {

//   for (let key in obj) {
//     if ( typeof obj[key] === 'number') {
//       obj[key] *= 2;
//     }
//   }
// }

// multiplyNumeric(menu); // после перебора свойств в цикле проверяем через оператор "typeof"
// ключи[key] по условию заданому через "if" на ЧИСЛО, чтобы "*" все числовые свойства на 2;
// console.log(menu); // числовые свойства после: 400, 600;

// ------------------------------------------------------------------------------------------------------------

// Вычисляемые свойства : испол.квадратные скобки для создания вычисляемого свойства;

// const fruit = prompt('Какой фрукт купить?', 'apple', 'bananas', 'orange');

// const bag = {
//     [fruit]: 5,
//     [fruit]: 7,
//     [fruit]: 9,
// };

// alert(bag.apple); // 5, если fruit = 'apple'

// Проверка на существования свойства в объекте
// const user = {};
// alert(user.noSuchProperty === undefined); // true означает "что нет такого свойства"

// Более усовершенствованный способ через оператор 'in' синтаксис такой:
// "key" in object

// Пример применения ниже:
// const user = {
//     name: 'Jhon',
//     age: 37,
//     gender: 'male',
// };

// alert('age' in user); // true, user.age существует
// alert('blabla' in user); // false, user.blabla не существует

// Оператор "in" для свойств со значением 'undefined'(особый случай и нужен оператор "in"):
// const obj = {
//     test: undefined,
// };

// alert(obj.test); // выведет 'undefined' якобы такого свойства не существует!?
// alert('test' in obj); // true, так будет правильно,если значение 'undefined'

/*
Целые числа идут в порядке ВОЗРОСТАНИЯ(1, 41, 44, 49), а целочисленные перебираются
в порядке СОЗДАНИЯ('+49', '+41', '+44', '+1').Сделать СВОЙСТВО кода НЕ ЦЕЛОЧИСЛЕННЫМ,
можно проставив знак "+" перед каждым кодом.
*/

// Не целочисленные свойства(в порядке создания):
// const codes = {
//     "+49": "Германия",
//     "+41": "Швейцария",
//     "+44": "Великобритания",
//     // ..,
//     "+1": "США"
//     };

// for (let code in codes) {
//   alert( +code ); // 49, 41, 44, 1
// }

// Целочисленные свойства(по возрастанию):
// const codes = {
//     "49": "Германия",
//     "41": "Швейцария",
//     "44": "Великобритания",
//     // ..,
//     "1": "США"
// };

// for (let code in codes) {
//   alert( +code ); // 1, 41, 44, 49
// }

// Свойства-функции объекта для совершения действия(например: по приветствовать пользователя):
// const user = {
//   name: 'James',
//   age: 45
// };

/* Function Expression - создали функцию(для Приветсвия) и присвоили ее СВОЙСТВУ -->>> user.sayHello
для нашего ОБЪЕКТА */

// !!! Функция, которая является СВОЙСТВОМ объекта, называют МЕТОДОМ этого объекта:
// *** итак, мы получили МЕТОД -->> sayHello объекта user;

// user.sayHello = function() {
//   alert('Hi! Привет! Здоровенькі були!');
// };

// user.sayHello();  // Hi! Привет! Здоровенькі були!

//* Можно было и по другому, заранее объявить функцию и использовать ее в качестве МЕТОДА:
// let user = {
// ...
// };

// сначала объявляем
// function sayHi() {
//   alert('Hello');
// }

// затем присваиваем(добавляем) в качестве метода
// user.sayHi = sayHi;

// Вызываем функцию как метод объекта
// user.sayHi();

// Более короткий синтаксис для методов в литерале объекта:
// const user1 = {
//   sayHi: function () {
//     alert("Hello1");
//   },
// }; // Вариант - 1

// user1.sayHi();

// const user2 = {
//   sayHi() {
//     alert('Hello2');
//   }
// }; // Вариант - 2

// user2.sayHi();

// Ключевое слово "this" для доступа к информации внутри ОБЪЕКТА:
// const user = {
//   name: "Jeery",
//   age: 15,
//   // Значение "this" - это ОБЪЕКТ "перед точкой" который использовался для вызова метода:
//   sayHi() {
//     // this - это "текущий объект"
//     alert(this.name);
//   },
// };

// user.sayHi(); // Jeery

//!!! Одна и та же функция назначена двум разным объектам
//*** и имеет различное значение "this"при вызовах:

// let user = { name: "Lui" };
// let admin = { name: "Admin" };

// Объявляем функцию
// function sayHi() {
// alert( this.name );
// }

// используем одну и ту же функцию в двух объектах
// присваиваем в качестве метода
// user.f = sayHi;
// admin.f = sayHi;

// "this" внутри функции является ссылкой на объект, который указан "перед точкой"
// при вызове obj.f() значение this внутри f равно obj -->>> (user or admin) .

// user.f();  // Джон (this == user)
// admin.f();  // Админ (this == admin)

//!!! Стрелочные функции НЕ ИМЕЮТ собственного "this" значение берется из внешней функции:

// const admin = {
//   firstName: 'Serg',
//   sayHi() {
//     let arrow = () => alert(this.firstName);
//     arrow();
//   }
// };

// ??? Здесь значение "this" в стрелочной функции 'arrow()' использует внешнюю функцию admin.sayHi()
// admin.sayHi();  // Serg

/*
 * Создайте объект calculator (калькулятор) с тремя методами:
 * read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
 * sum() (суммировать) возвращает сумму сохранённых значений.
 * mul() (умножить) перемножает сохранённые значения и возвращает результат.
 */

let calculator = {

  read() {
    this.firstVelue = Number(prompt("Enter the number?", 0));
    this.secondVelue = Number(prompt("Enter the number?", 0));
  },

  sum() {
    return this.firstVelue + this.secondVelue;
  },

  mul() {
    return this.firstVelue * this.secondVelue;
  },
};

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());


/*
 * Измените код методов 'up', 'down' и 'showStep'(написаный ниже) таким образом, чтобы их вызов можно
 * было сделать НЕ в последовательности вызовов(метода), а по -->> цепочке, например так:
 * --->>>  ladder.up().up().down().showStep();  // 1
*/

// const ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },

//   down() {
//     this.step--;
//   },

//   showStep: function() { // объявление метода в ES5
//     alert(this.step);
//   }
// };

//* Работа методов при последовательности вызовов(проверка кода):
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();  // 1


// Для работы методов объекта по ЦЕПОЧКЕ при их вызове задействуем в методе директиву 'return' :
const ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },

  down() { // объявление метода в ES6
    this.step--;
    return this;
  },

  showStep: function() { // объявление метода в ES5
    alert(this.step);
    return this;
  }
};

//* Работа методов по цепочке(проверка кода):
// ladder.up().up().down().showStep(); // 1

// Для длиной цепи вызовов более читабельно записать так:
// ladder
// .up()
// .up()
// .up()
// .down()
// .down()
// .up()
// .showStep(); // 2


