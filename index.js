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

const a = 10;
let b = a;
b = 30;
console.log(a);
console.log(b);