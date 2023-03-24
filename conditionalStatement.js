// Условные инструкции

// Инструкция if:
// let val = 10
// if (val > 5) {
//     val += 20
// }
// console.log(val);

// Инструкция с оператором отрицания !:
// const person = {
//     age: 20
// }
// if (person.name) {
//     console.log('Имя не указано');
// }

// Инструкция if-else:
// let val = 10
// if (val < 5) {
//     val += 20
// } else {
//     val -= 20
// }
// console.log(val);

// Инструкция if else if:
// const age = 25
// if (age > 18) {
//     console.log('Is adult');
// } else if (age >= 12) {
//     console.log('Is teenager');
// } else {
//     console.log('Is child');
// }

// Тот же самый пример, что и выше, используя только инструкции if:
// const age = 25

// if (age >= 18) {
//     console.log('Is adult');
// }

// if (age >= 12 && age < 18) {
//     console.log('Is teenager');
// }

// if (age < 12) {
//     console.log('Is child');
// }

// Использование if в функциях:
// const sumPositiveNumbers = (a, b) => {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'One of the arguments is not a number'
//     }

//     if (a <= 0 || b <= 0) {
//         return 'Number are not positive'
//     }
//     return a + b
// }
// console.log(sumPositiveNumbers('a', true));
// console.log(sumPositiveNumbers(-10, 5));
// console.log(sumPositiveNumbers(3, 5));

// Инструкция switch:
// const month = 2
// switch (month) {
//     case 12:
//         console.log('Декабрь');
//         break
    
//     case 1:
//         console.log('Январь');
//         break
//     case 2:
//         console.log('Февраль');
//         break

//     default:
//         console.log('Это не зимний месяц');
// }