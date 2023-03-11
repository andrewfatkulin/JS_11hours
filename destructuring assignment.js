// Деструктуризация объектов
// const userProfile = {
//     name: 'Andrew',
//     commentsQty: 23,
//     hasSignedAgreement: false
// }
// const {name, commentsQty} = userProfile
// const {hasSignedAgreement} = userProfile
// console.log(name);
// console.log(commentsQty);

// Деструктуризация массивов
// const fruits = ['Apple', 'Banana']
// const [fruitOne, fruitTwo] = fruits
// console.log(fruitOne);
// console.log(fruitTwo);

// Деструктуризация в функциях
// const userProfile = {
//     name: 'Andrew',
//     commentsQty: 35,
//     hasSignedAgreement: false
// }
// const userInfo = ({name, commentsQty}) => {
//     if (!commentsQty){
//         return `User ${name} has no comments`
//     }
//     return `User ${name} has ${commentsQty} comments`
// }
// console.log(userInfo (userProfile));