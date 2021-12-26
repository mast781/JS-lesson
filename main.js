





const small = document.getElementById("small")

const onClickHandler = (e) => {
    alert()
}

/*small.onclick = onClickHandler // способ ниже отличается тем, что на обработчик ниже можно повесить больше событий
small.onclick = null*/

/*const handler = () => { alert("dsfsf")}
// small.addEventListener("click", () => { alert("dsfsf")})
small.addEventListener("click", handler)
small.removeEventListener("click", handler)*/

console.log(typeof (() => {}) === function)
