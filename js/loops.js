'use strict';

/*
* Выведите в консоле через конкатынацию или шаблонные строки :
* -//- 99 bottles of beer on the wall
* -//- 99 bottles of beer on the wall
* -//- 99 bottles of beer,
* -//- Take one down, pass it around,
* И,так до 1 (одного) 99,98,97... 3,2,1;

* В конце последняя строка должна быть:
* -//- No more bottles of beer on the wall.

* P.S -->>> Задействуйте цикл с условием, декриментируйте на 1, не забывайте об ветвлениях;
*/

const word = 'bottles';
let count = 99;

while (count > 0) {
    console.log(`${count} ${word} of beer on the wall`);
    console.log(`${count} ${word} of beer,`);
    console.log(`Take one down, pass it around,`);

    count -= 1; // count = count - 1;

    if (count > 0) {
        console.log(`${count} ${word} of beer on the wall.`);
    } else {
        console.log(`No more ${word} of beer on the wall.`);
    }
};