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

console.log(tasks[todoListID_1])
console.log(tasks[todoListID_1].filter(t => t.title === "HTML"))
console.log([...tasks[todoListID_1]])
console.log([...tasks[todoListID_1]] === tasks[todoListID_1])
console.log([...tasks[todoListID_1], {id: "03lk", title: "TS", isDone: true}])

console.log({
    ...tasks,
    [todoListID_1]: [
        ...tasks[todoListID_1],
        {id: "03lk", title: "TS", isDone: true}
    ]
})

console.log(todoLists)