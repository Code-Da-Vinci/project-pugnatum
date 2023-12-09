const btnHamburg = document.querySelector("#abrirCerrar");
const boxList = document.querySelector("#desplegar");

btnHamburg.addEventListener("click", () => {
    boxList.classList.toggle("active");
    btnHamburg.classList.toggle("bi-x");
});

