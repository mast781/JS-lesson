const names = ["алекс", "Алекс", "Bob", "Alex", "Mike", "Nick", "alex", 1000]

console.log(names.sort().reverse())

const numbers = [100, 2, 333, 90, 888, 666, 42]

const compareFn = (a, b) => { // по возрастанию
    if (a > b) {
        return 3 // в методе sort возвращается положительное число, 0 и отрицательные не меняет местами
    } else {
        return -1000
    }
}

console.log(numbers.sort(compareFn))
console.log(numbers.sort((a, b) => a - b)) // идентична длинной записи выше

const students = [
    {
        name: "bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 95
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
        scores: 121
    }
]

console.log(students.sort((a, b) => a.scores - b.scores))

console.log(students.sort((a, b) => a.name < b.name ? -1 : 1))

console.log(students.
sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1)) // сортировка независимо от регистра