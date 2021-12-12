// string, number, boolean, null, undefined, NaN, Infinity, Symbol, BigInt - примитивы
// object, array, function - объекты

// 1. У объектов более сложная структура
// 2. Объекты - это ссылочный тип данных

// typeof не является прямым инструментом для определения типа данных

// console.log(typeof (() => {}) === "function")
// console.log(Array.isArray([]))

let num = 35
let nextNum = num // 35
nextNum = 44


/*const user = {} // ссылка на ячейку памяти, допустим №4567
const nextUser = user // ссылка на ту же ячейку
nextUser.name = "Bob"

console.log(user)
console.log(nextUser)*/

/*const user = {} // №4567
const nextUser = {} // №0007*/

/*
console.log(user === nextUser) // false, потому что разные объекты
console.log({} === {}) // false, потому что при чтении литерала объекта создаются разные объекты*/

const userList = [{
    name: "Alex"
}] // №4567
// const nextUserList = [] // №0007
/*const user = {
    name: "Bob"
}*/
// userList.push(user) // №4567
// nextUserList.push(user) // №0007

//const nextUserList = [...userList, user] // добавляет массив и user в конец массива (можно и в начале)
const user = {
    age: 23,
    name: "Helen",
    friends: ["Bob", "Alex"], // №333 - ссылка на массив
}

// const copyUser = {...user} // ссылка на массив переходит в другой объект. Объекты разные, а массив один. Это поверхностное копирование
// const copyUser = {...user, friends: [...user.friends]} // это правильне копирование, полное. Массив перезаписан


/*copyUser.friends.push("Donald")
console.log(copyUser)*/
//console.log(user)

// Библиотека lodash для копирования лучший вариант  https://lodash.com/docs/4.17.15#cloneDeep

const users = [
    {
        name: "Alex",
        age: 23
    },
    {
        name: "Bob",
        age: 25
    },
    {
        name: "Ann",
        age: 28
    },
    {
        name: "Helen",
        age: 18
    },
    {
        name: "Mike",
        age: 20
    },
    {
        name: "Victor",
        age: 29
    },
]

// map - метод массивов
const mapUsers = users.map(user => user.name === "Alex" ? {...user, age: 24} : {...user})

console.log(users[1] === mapUsers[1])

const greetings = users.map(u => `Hi! I'm ${u.name}. I'm ${u.age} y.o.`)

console.log(greetings)
