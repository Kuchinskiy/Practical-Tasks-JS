'use strict';

const words = [
    'программа', 
    'коллбек', 
    'функция', 
    'разметка', 
    'оформление',
    'событие',
    'цикл'
];

// Выбираем случайное слово
const word = words [Math.floor(Math.random() * words.length)];
// Создаем пустой массив,куда будем записывать отгаданые буквы и выводить оставшиеся не угаданые;
const answerArray = [];
/*
При каждом повторе цикла добавляем новый элемент в итоговый(пустой)массив - answerArray[i];
После завершения цикла длина answerArray будет такой же как длина слова - words.length;
*/ 
for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
}
/*
Переменная ramainingLetters необходима чтобы отслеживать к-во букв,которые осталось угадать;
И, выполнять декриментацию '--'  в цикле for когда обновляется состояние игры;
При каждом совпадении с guess уменшать на 1;
*/
let ramainingLetters = word.length;
// Создаем игровой цикл;
while (ramainingLetters > 0) {
    // Показать состояние игры
    alert(answerArray.join(' '));
    // Запросить вариант ответа
    const guess = prompt('Угадай букву, или нажми Отмена для выхода из игры:');

    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert('Пожалуйста введите одиночную букву.');
    } else {
        // Обновить состояние игры
        for (let j = 0; j < word.length; j++) {
            if (word[j].toLowerCase() === guess.toLowerCase()) {

                if (answerArray[j] === '_') {
                    ramainingLetters --;
                    answerArray[j] = guess.toLowerCase();
                } else {
                    alert('Такую букву вы уже угадали');
                }
            } 
        }
    }
    // Конец игрового цикла
}
// Отобразить ответ и поздравить игрока
alert(answerArray.join(' '));
alert(`Поздравляем вы угадали слово: ${word}`);


