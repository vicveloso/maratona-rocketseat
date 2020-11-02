let inputElement = document.getElementById("nome");
let btnElement = document.getElementById("botao")

btnElement.onclick = function () {
    let texto = (`Seja bem vindx, ${inputElement.value}.`);
    alert (texto);
}