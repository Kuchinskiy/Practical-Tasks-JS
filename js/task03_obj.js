'use strict';

// const user = {
//     name: 'Jhon',
//     age: 37,
//     gender: 'male',
// };

// const key = prompt('Что вы хотите узнать о пользователе?', '');

// Доступ к свойству через переменную
// alert( user[key] ); // Jhon (если ввели 'name')


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

