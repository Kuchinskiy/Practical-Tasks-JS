'use strict';

// Инициализируем через пременные 'location' координаты размещения;
const location1 = 3;
const location2 = 4;
const location3 = 5;

// Переменные для действий пользователя;
let guess; // определяет номер текущей попытки, поэтому не инициализирована и по умолчанию JS присваивает(underfined);
let hits = 0; // определяет и подсчитывает к-во попаданий, поэтому изначально присовоено значение 0;
let guesses = 0; // определяет подсчитывая, сколько было сделано попыток для попадания в цель;

let isSunk = false; // определяет и сохраняет инфу о том уничтожена цель или нет, будет изменяться на 'true';

// Создаем цикл для запуска игры;
// while (isSunk === false) {
    
//     guess = prompt('Ready, aim, fire! (enter a number 0-6):');

//     if (guess < 0 || guess > 6) {
//         alert('Please enter a valid cell number!');
//     } else {
//         guesses += 1;
//     }
// }