// const asyncFn = async () => {
//     return 'Success!'
// }
// console.log(asyncFn());

// const asyncFn = async () => {
//     return 10
// }
// console.log(asyncFn());

// const asyncFn = async () => {
//     return 'Success!'
// }
// asyncFn();
// .then (value => console.log(value);) 

// Асинхронная функция возвращает ошибку:

// const asyncFn = async () => {
//     throw new Error ('There was an error')
// }
// asyncFn();

// Обравотка ошибки с помощью методов then и catch

// const asyncFn = async () => {
//     throw new Error ('There was an error')
// }
// asyncFn();
// .then (value => console.log(value))
// .catch (error => console.log(error.message))

// Ожидание результата await

// const timerPromise = () => 
//     new Promise ((resolve, reject) => 
//     setTimeout (() => resolve (), 2000))

// const asyncFn = async () => {
//     console.log('Time starts');
//     await timerPromise (),
//     console.log('Time ended');
// }
// console.log(asyncFn());

// Тот же самый пример, но с отслеживанием выполнения промиса:

const timerPromise = () => 
    new Promise ((resolve, reject) => 
    setTimeout (() => resolve (), 2000))

const asyncFn = async () => {
    console.log('Time starts');
    const startTime = performance.now()
    await timerPromise ()
    const endTime = performance.now()
    console.log('Time ended', endTime - startTime);
}
console.log(asyncFn());

// Переход с промисов на async/await: