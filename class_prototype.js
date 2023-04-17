class Comment {
    constructor (text) {
        this.text = text
        this.votesQty = 0
    }
    upvote() {
        this.votesQty += 1
    }
}
const firstComment = new Comment ('First comment') // создание нового экземпляра класса
console.log(firstComment);
console.log (firstComment instanceof Comment) // проверка принадлежности
console.log (firstComment instanceof Object) // проверка принадлежности