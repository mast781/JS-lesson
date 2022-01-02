const todoListID_1 = "23hg-87kf"
const todoListID_2 = "89hf-02lj"

const todoLists = [
    {
        id: todoListID_1, //"23hg-87kf",
        title: "What to learn",
        filter: "all",
        /*tasks: [
            {id:"57hf",title:"HTML", isDone: true},
            {id:"68kl",title:"CSS", isDone: true},
            {id:"03lk",title:"REACT", isDone: true},
        ]*/
    },
    {
        id: todoListID_2,//"89hf-02lj",
        title: "What to buy",
        filter: "all",
        /*tasks: [
            {id:"11hf",title:"Meat", isDone: true},
            {id:"22kl",title:"Bear", isDone: true},
            {id:"33lk",title:"Milk", isDone: true},
        ]*/
    },
]


const tasks = {
    [todoListID_1]: [
        {id: "57hf", title: "HTML", isDone: true},
        {id: "68kl", title: "CSS", isDone: true},
        {id: "03lk", title: "REACT", isDone: true},
    ],
    [todoListID_2]: [
        {id: "11hf", title: "Meat", isDone: true},
        {id: "22kl", title: "Bear", isDone: true},
        {id: "33lk", title: "Milk", isDone: true},
    ]
}

// console.log(tasks[todoListID_1])
// console.log(tasks[todoListID_1].filter(t => t.title === "HTML"))
// console.log([...tasks[todoListID_1]])
// console.log([...tasks[todoListID_1]] === tasks[todoListID_1])
// console.log([...tasks[todoListID_1], {id: "03lk", title: "TS", isDone: true}])

console.log({
    ...tasks,
    [todoListID_1]: [
        ...tasks[todoListID_1],
        {id: "03lk", title: "TS", isDone: true}
    ]
})

console.log(todoLists)

// reduce

const nums = [1, 2, 3, 4, 5]
console.log(nums.reduce((sum, el) => sum + el, 0))

console.log(nums.reduce((max,el)=> max > el ? max : el))

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
];

console.log(students.reduce((sum, st) => sum + st.scores, 0))
console.log(students.reduce((best, st) => best.scores > st.scores ? best : st))

console.log(students.reduce((arr, st) => {
    return arr.concat({...st, scores: st.scores + 10})
}, []))

console.log(students.reduce((data, st) => {
    data[st.name] = [st.age, st.scores, st.isMarried]
    return data
}, {}))