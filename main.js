const small = document.getElementById("small")
const med = document.getElementById("medium")
const big = document.getElementById("big")

const onClickHandler = (e) => {
    // console.dir(e.target.id)
    e.stopPropagation()
    if (e.currentTarget.id === "small") {
        console.dir(e.currentTarget.id)
    }
}

/*small.onclick = onClickHandler // способ ниже отличается тем, что на обработчик ниже можно повесить больше событий
med.onclick = (e) => {
    e.stopPropagation()
    alert("yo")
}

big.onclick = () => alert ("hey")*/
//small.onclick = null*/

/*const handler = () => { alert("dsfsf")}
// small.addEventListener("click", () => { alert("dsfsf")})
small.addEventListener("click", handler)
small.removeEventListener("click", handler)*/

// console.log(typeof ((() => {})) === "function")
/*const removeUser = (e) => {
    console.log(e.currentTarget.id)
}*/
const removeUser = (e) => {
    if (e.target.tagName === "BUTTON") {
        console.log(e.target.id)
    }
}

small.onclick = removeUser
const a = document.getElementById("a")

a.onclick = (e) => {
    e.preventDefault()
    alert("Golden egg")
}

// RECURSION

// FACTORIAL

function factorial(n) {
    let result = 1
    for (let i = 1; i <= n; i++) {
        result *= i
    }
    return result
}

console.log(factorial(3))

function recFactorial(n) {
    if (n === 0) {
        return 1
    } else {
        return recFactorial(n - 1) * n
    }
}

console.log(recFactorial(3))

// сумма N первых чисел

// sum (n-1) + n

function recSum(n) {
    /*if(n === 0) {
        return 0
    } else {
        return recSum(n - 1) + n
    }*/
    return n === 0 ? 0 : recSum(n - 1) + n
}

console.log(recSum(5))

const user = {
    name: "Bob",
    age: 23,
    friend: {
        name: "Alex",
        age: 33,
        address: {
            city: "Minsk",
            street: "Yo"
        }
    }
}

// Рекурсивная функция для создания бесконечно глубоких копий объектов, состоящих из объектов

function copyObject(obj) {
    const keys = Object.keys(obj)
    const newObj = {}

    for (let i = 0; i < keys.length; i++) {
        if(typeof obj[keys[i]] === "object") {
            newObj[keys[i]] = copyObject(obj[keys[i]])
        } else {
            newObj[keys[i]] = obj[keys[i]]
        }
    }

    return newObj
}

const copy = copyObject(user)
console.log(copy.friend === user.friend)
console.log(copy.friend.address === user.friend.address)