'use strict';

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


/*
* Напишите функцию isEmpty(obj) , которая возвращает true ,
* если у объекта нет свойств, иначе false .
*/

function isEmpety(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

let schedule = {};
// console.log(schedule);
alert(isEmpety(schedule)); // true (ДА, obj БЕЗ свойств(пустой))
// цикл "for" НЕ встретил свойства;

schedule['8:30'] = 'get up';
// console.log(schedule);
alert(isEmpety(schedule)); // false (НЕТ, obj не пустой СО свойствами(имеються))
// цикл "for" ВСТРЕТИЛ свойства;


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


