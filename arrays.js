// const myArray = [1,2,3];
// console.log(myArray);

// const myArray2 = new Array (1, 2, 3);
// console.log(myArray2);

// const myArray3 = [1, true, 'Andrew'];
// console.log(myArray3);
// console.log(myArray3.length);
// console.log(myArray3[0]);
// console.log(myArray3[2]);
// myArray3.length = 7; // изменение длины массива и его вывод
// console.log(myArray3);

// ДОБАВЛЕНИЕ НОВЫХ ЭЛЕМЕНТОВ В МАССИВ

// const myArray = [1, 2, 3, 4]
// console.log(myArray);
// console.log(myArray.length);
// myArray [2] = 'abc'
// console.log(myArray);
// console.log(myArray[2]);
// myArray [4] = true
// console.log(myArray);
// console.log(myArray.length);

// МЕТОДЫ МАССИВОВ

// push
// const myArray = [1, 2, 3]
// console.log(myArray);
// myArray.push(4)
// console.log(myArray);
// myArray.push(true)
// console.log(myArray);

// pop
// const myArray = [1, 2, 3]
// console.log(myArray);
// myArray.pop()
// console.log(myArray);
// const removedElement = myArray.pop()
// console.log(myArray);
// console.log(removedElement);

// unshift
// const myArray = [1, 2, 3]
// console.log(myArray)
// myArray.unshift(true)
// console.log(myArray);
// myArray.unshift('abc')
// console.log(myArray);

// shift
// const myArray = [1, 2, 3]
// console.log(myArray)
// myArray.shift()
// console.log(myArray);
// const removedElement = myArray.shift()
// console.log(myArray);
// console.log(removedElement);

// forEach
// const myArray = [1, 2, 3]
// console.log(myArray)
// const res = myArray.forEach(el => console.log(el*2));
// console.log(res); // результатом метода forEach будет undefined, т.к. мы перебираем элементы, нет ключевого слова return
// console.log(myArray); // метод forEach не меняет оригинальный массив

// map
// const myArray = [1, 2, 3]
// console.log(myArray)
// const newArray = myArray.map(el => el*3)
// console.log(newArray);
// console.log(myArray);

// const myArray = [1, 2, 3] // тот же самый пример, используя тело функции и добавив () у параметра
// console.log(myArray)
// const newArray = myArray.map((el) => {
//     return el*3
// })
// console.log(newArray);
// console.log(myArray);

// const myArray = [1, 2, 3] // тот же самый пример, используя анонимное функциональное выражение
// console.log(myArray)
// const newArray = myArray.map(function (el) {
//     return el*3
// })
// console.log(newArray);
// console.log(myArray);