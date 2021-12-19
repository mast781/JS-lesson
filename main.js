let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
]

function getStudentName (item, i) {
    return `Index: ${i}: ${item.name}.` // внутри функции map мы получаем доступ к индексу элемента массива
}
// console.log(students.map((item, i) => `Index: ${i}: ${item.name}.`)) // - стрелочный вариант

const mapIt = (array, callback) => { // самописный map
    const newArray = []
     for (let i = 0; i < array.length; i++) {
         newArray[i] = callback(array[i], i)
     }
    return newArray
}

/*console.log(mapIt(students, getStudentName))

console.log(students.map(s => s)) // поверхностная копия массива, проще использовать spread ([...students])
console.log(students.map(s => ({...s}))) // глубокая копия
console.log(students.map(s => s.name === "Bob" ? {...s, scores: s.scores + 10} : s)) // запись с тернарным оператором

console.log(students.map(s => {
    if(s.name === "Bob") {
        return {...s, scores: s.scores + 10}
    }
    return s
}))*/

const filterIt = (array, callback) => { // самописный filter
    const newArray = []

    for (let i = 0; i < array.length; i++) {
        callback(array[i]) && newArray.push(array[i])
        /*if (callback(array[i])) {
            newArray.push(array[i])
        }*/
    }
    return newArray
}

/*console.log(students.filter(s => s.scores >= 100)) // это разные функции
console.log(filterIt(students, s => s.scores >= 100)) // это разные функции*/


const findIt = (array, callback) => { // самописный find
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return array[i]
        }
    }
}

console.log(students.find(s => s.name === "Bob")) // это разные функции
console.log(findIt(students, s => s.name === "Bob")) // это разные функции