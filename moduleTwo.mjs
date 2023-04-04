// import printMyName from './moduleOne.mjs'
// printMyName()

// import sumNumbers from './moduleOne.mjs'
// const res = sumNumbers (10, 2)
// console.log(res);
// console.log(myName);

// const res2 = sum (5, 10)
// console.log(res2);

// Экспорт нескольких переменных:
// import {
//     one,
//     two
// } from './moduleOne.mjs'
// console.log(one);
// console.log(two);

// Переииенование импортов:
import {
    one as oneRenamed,
    two
} from './moduleOne.mjs'
console.log(oneRenamed);
console.log(two);