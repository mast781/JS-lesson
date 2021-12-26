





const small = document.getElementById("small")

const onClickHandler = () => {
    alert()
}

small.onclick = onClickHandler // способ ниже отличается тем, что на обработчик ниже можно повесить больше событий
small.onclick = null
/*
small.addEventListener("click", () => { alert("dsfsf")})
small.addEventListener("click", () => { alert("weddf")})*/
