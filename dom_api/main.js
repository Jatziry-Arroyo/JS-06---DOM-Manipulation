// DOM API
// OBTENER EL DOM POR ID

const div1 = document.getElementById("div-1");
console.log(div1);

const divCollection = document.getElementsByTagName("div");
console.log(divCollection);

const p = document.getElementById("p1");
const usernameInputs = document.getElementsByName("username");
const usernameInput = usernameInputs [0];
console.log(p, usernameInput);

//EVENTS
usernameInput.addEventListener("input", (evento) => {
    console.log(evento.target.value);
    p.innerText = evento.target.vaue;
});

