'use strict';

/*
Напишите скрипт имитирующий авторизацию администратора в панели управления.

При загрузке страницы у посетителя запрашивается логин через prompt:
  
    - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
      показывать alert с текстом 'Доступ запрещен, неверный логин!'
    - Если был введен логин совпадающий со значением константы adminLogin, 
      спрашивать пароль через prompt.
    
  При вводе пароля:

      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы adminPassword,
        показывать alert с текстом 'Доступ запрещен, неверный пароль!'
      - Если введён пароль который совпадает со значением константы adminPassword, 
        показывать alert с текстом 'Добро пожаловать!'

🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/

/*
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
*/

/*=============================================================================================*/


const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

// message for 'alert' in variable // parol && login //

const userRefused = 'Отменено пользователем !';
const invalidLogin = 'Доступ запрещен, неверный логин !';
const invalidPassword = 'Доступ запрещен, неверный пароль !';
const validPassword = 'Добро пожаловать !';

const login = prompt('Введите пожалуйста логин :');

if (login === null || login === '') {
  alert(userRefused);
} else if (login !== adminLogin) {
  alert(invalidLogin);
} else {
  const password = prompt('Введите пароль');
  if (password === null || password === '') {
    alert(userRefused);
  }
  else if (password !== adminPassword) {
    alert(invalidPassword);
  }
 else {
   alert(validPassword);
 }
}