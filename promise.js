// fetch ('https://jsonplaceholder.typicode.com/todos')
// .then (response => {
//     console.log(response);
//     return response.json()
// })
// .then (json => console.log(json))
// .catch (error => console.error(error))

// fetch ('https://jsonplaceholder.typicode.com/todos/1') // добавляем /1 , чтобы получить только один объект с id 1
// .then (response => {
//     console.log(response);
//     return response.json()
// })
// .then (json => console.log(json))
// .catch (error => console.error(error))

// fetch ('https://jsonplaceholder.typicode.com/todos')
// .then (response => response.json()) // неявный возврат метода json
// .then (json => console.log(json))
// .catch (error => console.error(error))

// fetch ('https://jsonplaceholder.typicode.com/todos')
// .then (response => response.json()) // неявный возврат метода json
// .then (json => console.log(json))
// .catch (error => console.log(error.message)) // вывод сообщения о конкретной ошибке

// Пример Промиса

// const getData = (url) =>
//     new Promise ((resolve, reject) =>
//     fetch (url)
//     .then (response => response.json())
//     .then (json => resolve (json))
//     .catch (error => reject (error))
// )

// getData ('https://jsonplaceholder.typicode.com/todos')
// .then (data => console.log (data))
// .catch (error => console.log (error.message))

const getData = (url) =>
    new Promise ((resolve, reject) =>
    fetch (url)
    .then (response => response.json())
    .then (json => resolve (json))
    .catch (error => reject (error))
)

getData ('https://jsonplaceholder.typicode.com/todos/3') // можно указывать какой объект хотим вызвать
.then (data => console.log (data))
.catch (error => console.log (error.message))