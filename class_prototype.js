// class Comment {
//     constructor (text) {
//         this.text = text
//         this.votesQty = 0
//     }
//     upvote() {
//         this.votesQty += 1
//     }
// }
// const firstComment = new Comment ('First comment') // создание нового экземпляра класса
// console.log(firstComment);
// console.log (firstComment instanceof Comment) // проверка принадлежности
// console.log (firstComment instanceof Object) // проверка принадлежности

// firstComment.upvote () // вызов методов
// console.log(firstComment.votesQty);
// firstComment.upvote () // вызов методов
// console.log(firstComment.votesQty);

// console.log (firstComment.hasOwnProperty ('text')) // проверка принадлежности свойств экземпляру объекта
// console.log (firstComment.hasOwnProperty ('votesQty'))
// console.log (firstComment.hasOwnProperty ('upvote'))
// console.log (firstComment.hasOwnProperty ('hasOwnProperty'))

// const secondComment = new Comment ('Second comment') // создание нескольких экземпляров
// console.log(secondComment);
// const thirdComment = new Comment ('Third comment')
// console.log(thirdComment);
// secondComment.upvote () // вызов метода upvote
// console.log(secondComment);

// Статические методы

// class Comment {
//     constructor (text) {
//         this.text = text
//         this.votesQty = 0
//     }
//     upvote() {
//         this.votesQty += 1
//     }
//     static mergeComments (first, second) {
//         return `${first} ${second}`
//     }
// }
// console.log (Comment.mergeComments ('First comment.', 'Second comment'))

// Расширение других классов

// class NumbersArray extends Array {
//     sum () {
//         return this.reduce ((el, acc) => acc += el, 0)
//     }
// }
// const myArray = new NumbersArray (2, 5, 7)
// console.log(myArray);
// console.log(myArray.sum())