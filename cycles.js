// 1) FOR:
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// Цикл for для массивов:

// const myArray = ['first', 'second', 'third']
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// Метод массивов forEach:

// const myArray = ['firs', 'second', 'third']
// myArray.forEach ((element, index) => {console.log(element, index);
// })

// 2) WHILE:

// let i = 0
// while (i < 5) {
//     console.log(i);
//     i++
// }

// 3) DO...WHILE...

// let i = 0
// do {
//     console.log(i);
//     i++
// } while (i < 5)

// let i = 10
// do {
//     console.log(i);
//     i++
// } while (i < 5)

// 4) FOR...IN...

// for...in... для объектов
// const myObject = {
//     x: 10,
//     y: true,
//     z: 'abc'
// }
// for (const key in myObject) {
//     console.log(key, myObject[key]);
// }

// forEach для объектов:
// const myObject = {
//     x: 10,
//     y: true,
//     z: 'abc'
// }
// Object.keys(myObject).forEach(key => {
//     console.log(key, myObject[key]);
// })

// Перебор значений свойств объекта:
// const myObject = {
//     x: 10,
//     y: true,
//     z: 'abc'
// }
// Object.values(myObject).forEach(values => {
//     console.log(values);
// })

// for...in... для массивов:
// const myArray = [true, 10, 'abc', null]
// for (const key in myArray) {
//     console.log(myArray[key]);
// }

// 5) FOR...OF...

// const myString = 'Hey'
// for (letter of myString) {
//     console.log(letter);
// }

// for...of... для массивов:
// const myArray = [true, 10, 'abc', null]
// for (element of myArray) {
//     console.log(element);
// }

// Приоритетнее метод для массивов forEach:
// const myArray = [true, 10, 'abc', null]
// myArray.forEach (element => {
//     console.log(element);
// })

