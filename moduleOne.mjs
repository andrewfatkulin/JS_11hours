// const myName = () => {
//     console.log('Bogdan');
// }
// export default myName

// const myName = 'Bogdan'
// const sum = (a, b) => a + b
// // console.log(myName);
// export default sum

// Экспорт нескольких переменных:
// const one = 1
// const two = 'two'
// export {
//     one,
//     two
// }

// Переименование импортов:
// const one = 1
// const two = 'two'
// export {one, two}

// Пример экспорта нескольких переменных:
const sum = (a, b) => a + b
const mult = (a, b) => a * b
export {
    sum,
    mult
}