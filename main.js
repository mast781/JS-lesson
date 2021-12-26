





const small = document.getElementById("small")
const med = document.getElementById("medium")
const big = document.getElementById("big")

const onClickHandler = (e) => {
    // console.dir(e.target.id)
    if(e.currentTarget.id === "small") {
        console.dir(e.currentTarget.id)
    }
}

small.onclick = onClickHandler // способ ниже отличается тем, что на обработчик ниже можно повесить больше событий
/*med.onclick = onClickHandler
big.onclick = onClickHandler*/
//small.onclick = null*/

/*const handler = () => { alert("dsfsf")}
// small.addEventListener("click", () => { alert("dsfsf")})
small.addEventListener("click", handler)
small.removeEventListener("click", handler)*/

// console.log(typeof ((() => {})) === "function")
