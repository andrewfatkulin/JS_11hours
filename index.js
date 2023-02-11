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

const personOne = {
    name: 'Andrew',
    age: 35
}

function increasePersonAge (person) {
    const updatedPerson = Object.assign ({}, person)
    updatedPerson.age +=1
    return updatedPerson
}

const updatedPersonOne = increasePersonAge (personOne)

console.log(personOne.age);
console.log(updatedPersonOne.age);