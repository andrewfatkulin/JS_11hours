// let a;
// a = true;
// console.log(a);

// let b;
// console.log(b);

// const c = 10;
// console.log(c);

// let myName;
// console.log(myName);
// myName = 'Andrew';
// console.log(myName);

// console.log(console.log(10));

// const myName = 'Andrew';
// myName = 'Oksana'; //Error
// console.log(myName);

// const objectA = {
//     a: 10,
//     b: true,
//     c: undefined,
//     d: 'Andrew',
// }
// const copyOfA = objectA;
// copyOfA.a = 20;
// copyOfA.e = null;
// console.log(copyOfA);

// let a = 10;
// a = true;
// a = 'Andrew';
// a = undefined;
// console.log(a);

// function a () {
//     console.log('Hey there');
// }
// a ();
// // a = 10;
// // console.log(a);
// // a ();

// const a = () => {
//     console.log('Hey there');
// }
// a ();
// // a = 10;
// // a ();

// const myCity =  {
//     city: 'Ivanovo',
//     popular: true,
//     country: 'Russia',
// }
// console.log(myCity);
// console.log(myCity.city);
// console.log(myCity.country);
// myCity.city = 'Kohma';
// console.log(myCity);

// const myCity = {
//     city: 'Ivanovo'
// }
// console.log(myCity);
// myCity.popular = true; // добавление свойств
// console.log(myCity);
// myCity.country = 'Russia'; // добавление свойств
// console.log(myCity);

// delete myCity.popular; // удаление свойств
// console.log(myCity);

// myCity = {
//     city: 'Ivanovo',
// }
// console.log(myCity);
// myCity['popular'] = true;
// console.log(myCity);
// const countryPropertyName = 'country';
// myCity [countryPropertyName] = 'Russia';
// console.log(myCity);

// const myCity = {
//     city: 'Ivanovo',
//     info: {
//         isPopular: true,
//         country: 'Russia',
//     }
// }
// console.log(myCity);
// console.log(myCity.info.country);
// delete myCity.info.isPopular;
// console.log(myCity);
// delete myCity.info ['country'];
// console.log(myCity);
// delete myCity.info;
// console.log(myCity);

// const name = 'Andrew';
// const postsQty = 35;

// const userProfile = {
//     name: name,
//     postsQty: postsQty,
//     hasSignedAgreement: false,
// }
// console.log(userProfile);

// const userProfile = { // таже запись, что выше, но в сокращенном формате
//     name,
//     postsQty,
//     hasSignedAgreement: false,
// }
// console.log(userProfile);

// const myCity = {
//     myCity: 'Ivanovo',
//     cityGreeting: function () {
//         console.log('Greetings');
//     }
// }
// myCity.cityGreeting ();

// const myCity = {  // сокращенная запись по сравнению с предыдущим форматом
//     myCity: 'Ivanovo',
//     cityGreeting () {
//         console.log('Greetings!');
//     }
// }

// myCity.cityGreeting ();

// const post = {
//     title: 'My post',
//     likesQty: 5,
// }
// //console.log(post);
// JSON.stringify(post); // преобразование JS объекта в JSON
// const postStringified = JSON.stringify (post);
// JSON.parse (postStringified); // преобразование JSON в JS объект

// const a = 10;
// let b = a;
// b = 30;
// console.log(a);
// console.log(b);

// const person = {
//     name: 'Andrew',
//     age: 35,
// }
// person.age = 36;
// person.isAdutl = true;
// console.log(person);

// const person = {
//     name: 'Andrew',
//     age: 35,
// }
// const person2 = person; // Мутирование копий
// person2.age = 36;
// person2.isAdult = true;

// console.log(person.age);
// console.log(person.isAdult);

// const person = {
//     name: 'Andrew',
//     age: 35,
// }
// const person2 = Object.assign ({}, person);
// person2.age = 33;
// console.log(person.age);
// console.log(person2.age);

// const person = {
//     name: 'Andrew',
//     age: {
//         age: 35,
//         son: 'Semen',
//     }
    
// }
// const person2 = {...person};
// person2.name = 'Oksana';
// const person3 = {...person};
// person3.age.son = 'Petr'; // при изменении вложенного свойства, изменяется и оригинальное свойство объекта, т.е ссылка НЕ СОХРАНЯЕТСЯ
// console.log(person.name);
// console.log(person2.name);
// console.log(person.age.son);
// console.log(person3.age.son);

// const person = {
//     name: 'Andrew',
//     son: {
//         son: 'Semen',
//     }
// }
// const person2 = JSON.parse (JSON.stringify(person));
// person2.name = 'Oksana';
// person3 = JSON.parse (JSON.stringify(person)); // ссылки вложенно объекта НЕ СОХРАНЯЮТСЯ
// person3.son.son = 'Petr'
// console.log(person.name);
// console.log(person2.name);
// console.log(person.son.son);
// console.log(person3.son.son);

// ФУНКЦИИ

// let a = 5;
// let b = 3;
// let c;
// c = a + b;
// console.log(c);

// a = 8;
// b = 12;
// c = a + b;
// console.log(c);

//Оптимизация примера выше с помощью функции

// let a = 5;
// let b = 3;
// function sum (a, b) {
//     const c = a + b;
//     console.log(c);
// }
// sum (a, b);

// a = 8;
// b = 12;
// sum (a, b);

// ФУНКЦИЯ - ЭТО ОБЪЕКТ

// function myFn (a, b) {
//     a = a + 1;
//     c = a + b;
//     return c
// };
// console.dir (myFn);

// function myFn (a, b) {
//     a = a + 1;
//     c = a + b;
//     return c
// };

// function myFn (a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// };
// const d = myFn (10, 3);
// console.log(d);
// const g = myFn (15, 9);
// console.log(g);

// function myFn () {};
// myFn ();
// const F = myFn ();
// console.log(F);

// Практика от Антона Комарова

// const start = () => {
//     return start ()
// }
// start ();

// const start = (x, y) => {
//     return start (x, y) // RangeError: Maximum call stack size exceeded
// }
// start (10, 20);
// console.log(start);

// const start = (x, y) => {
//     return start // Функция вернет саму себя, но не вызовется
// }
// start (10, 20);
// console.log(start);

// const start = () => {
//     return undefined
// }
// console.log(start());

// Продолжение курса + дополнение от А.К. 

// function increasePersonAge (person) {
//     const clonedPerson = JSON.parse(JSON.stringify(person))
//     console.log('Person here => ', clonedPerson)
//     clonedPerson.age += 1
//     console.log('Person here => ', clonedPerson)
//     return clonedPerson
// }
// const personOne = {
//     name: 'Andrew',
//     age: 35
// }
// const personTwo = {
//     name: 'Oksana',
//     age: 33
// }
// increasePersonAge (personOne);
// increasePersonAge (personTwo);
// console.log('Andrew age ' + personOne.age);
// console.log('Oksana age ' + personTwo.age);

// Пример от А.К.
// function increasePersonAge (age) {
//     age += 1
//     return age
// }
// const personAge1 = 35
// const personAge2 = 33
// increasePersonAge(personAge1);
// increasePersonAge(personAge2);
// console.log('increasePersonAge1 => ' + personAge1);
// console.log('increasePersonAge2 => ' + personAge2);

// Продолжение курса:

// const personOne = {
//     name: 'Andrew',
//     age: 35
// }

// function increasePersonAge (person) {
//     const updatedPerson = Object.assign ({}, person)
//     updatedPerson.age +=1
//     return updatedPerson
// }

// const updatedPersonOne = increasePersonAge (personOne)

// console.log(personOne.age);
// console.log(updatedPersonOne.age);

//Колбэк функция

// function anotherFunction () {

// }
// function fnWithCallback (callbackFunction) {
//     callbackFunction ()
// }
// fnWithCallback (anotherFunction);

// function printMyName () {
//     console.log('Andrew');
// }
// console.log('Start');
// setTimeout (printMyName, 2000);

// Области видимости

// let a
// let b

// function myFn () {
//     let b
//     a = true
//     b = 10
//     console.log(b);
// }
// myFn ()
// console.log(a);
// console.log(b);

// Цепочка областей видимости
// const a = 5
// function myFn () {
//     const c = 15
//     console.log(c);
//     const d = 20
//     function innerFn () {
//         const b = 10;
//         console.log(a);
//         console.log(b);
//         console.log(d);
//     }
//     innerFn()
// }
// myFn ()

// Цепочка областей видимости. Шаг за шагом.

// let a
// let b
// function myFn () {
//     let b
//     a = true
//     b = 10
//     console.log(b);
// }
// myFn ()
// console.log(a);
// console.log(b);

// Необъявленные переменные

// function myFn () {
//     a = true
//     console.log(a);
// }
// myFn ()
// console.log(a);
//const b = false
//console.log(b);

// Стройгий режим

// 'use strict'
// function myFn() {
//     a = true
//     console.log(a);
// }
// myFn()
// console.log(a);

// ОПЕРАТОРЫ

// let a, b
// a = 10
// b = a
// let c = a + b
// console.log(c);

// ЛОЖНЫЕ ЗНАЧЕНИЯ

// const a = Boolean(undefined);
// console.log(a);

// const b = Boolean('');
// console.log(b);

// const c = Boolean(null);
// console.log(c);

// const d = Boolean('A');
// console.log(d);

// Пример оператора typeof:

// const a = typeof (10);
// console.log(a);

// const b = typeof (true);
// console.log(b);

// const c = typeof ('Andrew');
// console.log(c);

// const d = typeof (undefined);
// console.log(d);

// const e = typeof (null);
// console.log(e);

// const a = typeof (undefined);
// console.log(a);
// const c = a === 'undefined';
// console.log(c);

// let isUndefined
// const a = typeof(isUndefined)
// console.log(isUndefined)
// const c = a === 'undefined'
// console.log(c)

// ПРИМЕРЫ С ОПЕРАТОРОМ !
// const a = !10;
// console.log(a);

// const b = !0;
// console.log(b);

// const c = !'abc';
// console.log(c);

// const d = !!0;
// console.log(d);

// const e = !!10;
// console.log(e);

// const f = !!undefined;
// console.log(f);

// const g = !!Object;
// console.log(g);

// ОПЕРАТОРЫ И и ИЛИ

// const a = 10;
// const b = 0;
// const c = a || b;
// console.log(c);

// const a = 10 & 0;
// console.log(a);

// const b = undefined || 'Andrew';
// console.log(b);

// const c = 'Andrew' & 0;
// console.log(c);

// const d = 0 || undefined;
// console.log(d);

// let a = 10;
// const b = a && console.log('Выполнено!');
// console.log(b);
// let c;
// const d = c && console.log('Выполнено!');
// console.log(d);

// const a = 15 && 'Andrew' || undefined;
// console.log(a);

// ОПЕРАТОР РАЗДЕЛЕНИЯ ОБЪЕКТА НА СВОЙСТВА

// const button = {
//     width: 200,
//     text: 'Buy',
//     color: 'yellow'
// }
// const redButton = {
//     ...button,
//     color: 'red',
//     background: 'white'
// }
// console.table(redButton);

// button = {
//     width: 200,
//     text: 'Buy',
//     color: 'yellow'
// }
// const redButton = {
//     color: 'red', // если указать цвет перед оператором разделения объекта на свойства, то цвет red заменится на yellow и порядок свойств будет начинаться с color
//     ...button,
//     background: 'white'
// }
// console.table(redButton);

// ОБЪЕДИНЕНИЕ ОБЪЕКТОВ С ПОМОЩЬЮ ...

// const buttonInfo = {
//     text: 'Buy'
// }
// const buttonStyle = {
//     color: 'yellow',
//     width: 200,
//     height: 300
// }
// const button = {
//     ...buttonInfo,
//     background: 'white',
//     ...buttonStyle,
// }
// console.table(button);

// КОНКАТЕНАЦИЯ СТРОК

// console.log('Hello ' + 'World');

// const hello = 'Hello';
// const world = 'World';
// const greeting = hello + ' ' + world;
// console.log(greeting);

// const hello = 'Hello';
// const world = 'World';
// const greeting = `${hello} ${world}`;
// console.log(greeting);

// const name = 'Андрей';
// const town = 'Иваново';
// const infoPerson = 'Меня зовут ' + `${name}` + ' и я живу в городе ' + `${town}`;
// console.log(infoPerson); 

// ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ. ПРИСВАИВАНИЕ ФУНКЦИОНАЛЬНОГО ВЫРАЖЕНИЯ ПЕРЕМЕННОЙ.

// const myFunction = function (a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }
// const d = myFunction (5, 3);
// console.log(d);
// myFunction (5, 3);
// console.log(myFunction (5, 3));

// const myFunction = setTimeout(function() {
//     console.log('Отложенное выражение');
// }, 1000);
// console.log(myFunction);

// СТРЕЛОЧНЫЕ ФУНКЦИИ
// КАК ДАТЬ ИМЯ СТРЕЛОЧНОЙ ФУНКЦИИ? Задать ее с помощью переменной...
// const sum = (a, b) => {
//     let c
//     a = a + 1 
//     c = a + b
//     // console.log(c);
//     return c
// }
// console.log(sum (5, 3));

// СТРЕЛОЧНАЯ ФУНКЦИЯ В ВЫЗОВЕ ДРУГОЙ ФУНКЦИИ

// setTimeout (() => {
//     console.log('Отложенное сообщение');
// }, 1000)

// Пример №1:

// function myltByFactor (value, multiplier = 1) { // объявленная функция
//     return value * multiplier
// }
// console.log(myltByFactor (10,2));
// console.log(myltByFactor (5));

// const myltByFactor = function (value, multiplier = 1) { // анонимное функциональное выражение
//     return value * multiplier
// }
// console.log(myltByFactor(10,2));
// console.log(myltByFactor(5));

// const fun = (value, multiplier = 1) => value * multiplier; // стрелочная функция
// console.log(fun(10));
// console.log(fun(20, 2));

// const dateTime = Date (); // использование функции Date ()
// console.log(dateTime);

// Пример №2:

// const newPost = (post, addedAd = Date ()) => ({ // НЕЯВНЫЙ возврат нового объекта из функции
//     ... post,
//     addedAd
// })
// // console.log(newPost);

// const firstPost = {
//     id: 1,
//     author: 'Andrew',
// }
// // console.log(firstPost);

// const secondPost = {
//     id: 2,
//     author: 'Oksana',
// }

// console.log(newPost (firstPost));
// console.log(newPost (secondPost));
// const person = newPost (firstPost)
// console.log(person);

// const newPost = (post, addedAt = Date ()) => { // ЯВНЫЙ возврат нового объекта из функции
//     return {
//         ... post,
//         addedAt
//     }
// }
// const firstPost = {
//     id: 1,
//     author: 'Andrew',
// }
// console.log(newPost (firstPost));

// ОБРАБОТКА ОШИБОК В JS

// const fnWithError = () => {
//     throw new Error ('Some error')
// }
// fnWithError ()
// console.log('Continue...');

// TRY/CATCH

// const fnWithError = () => {
//     throw new Error ('Some error')
// }
// try {
//     fnWithError ()
// } catch (error) {
//     console.error(error);
//     console.log(error.message);
// }
// console.log('Continue...');

// ИНСТРУКЦИИ