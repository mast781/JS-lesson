





const small = document.getElementById("small")
const med = document.getElementById("medium")
const big = document.getElementById("big")

const onClickHandler = (e) => {
    // console.dir(e.target.id)
    e.stopPropagation()
    if(e.currentTarget.id === "small") {
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
    if(e.target.tagName === "BUTTON") {
        console.log(e.target.id)
    }
}

small.onclick = removeUser
const a = document.getElementById("a")

a.onclick = (e) => {
    e.preventDefault()
    alert("Golden egg")
}