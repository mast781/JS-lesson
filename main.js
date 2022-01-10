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

console.log(students.sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1)) // сортировка независимо от регистра


let num = [70, 2, 45, 16, 16]

function mySort(num) {
    let resNum = []
    do {
        let minValue = Math.min(...num) // без трех точек не работает, работает только с набором чисел, а не с массивом

        resNum.push(minValue)

        num.splice(num.indexOf(minValue), 1)
    } while (num.length !== 0)
    return resNum
}

console.log(mySort(num))

// функция для поиска n максимальных элементов массива - поиграться при желании

num = [70, 2, 45, 16, 16]

// Классическая сортировка пузырьком

function sortBubble(num) {
    for (let i = 0; i < num.length - 1; i++) {
        for (let j = 0; j < num.length - 1 - i; j++) {
            if (num[j] > num[j + 1]) {
                [num[j], num[j + 1]] = [num[j + 1], num[j]]
                /*let x = num[i]
                num[i] = num[j]
                num[j] = x*/
            }
        }
    }
    return num
}

console.log(sortBubble(num))

num = [2, 9, 34, 1, 5, 51, -2, 88]

// Оптимизированная сортировка пузырьком

function sorting(num) {
    let isSorted
    for (let i = 0; i < num.length - 1; i++) {
        isSorted = true
        for (let j = 0; j < num.length - 1 - i; j++) {
            if (num[j] > num[j + 1]) {
                isSorted = false;
                [num[j], num[j + 1]] = [num[j + 1], num[j]] // деструктуризация меняем элементы массива местами
                /*let x = num[i]
                num[i] = num[j]
                num[j] = x*/ //  олдскульный вариант замены элементов
            }
        }
        if (isSorted) {
            return num
        }
    }
}

console.log(sorting(num))