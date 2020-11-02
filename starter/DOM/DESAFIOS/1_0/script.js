//variavel let referenciando os elementos que preciso utilizando o identificador definido no documento index.html
let btnElement = document.getElementById("botao");
let boxElement = document.getElementById("box")
//criando uma função para executar determinada ação, nesse caso "onclick" ou seja quando for clicado
//irá executar um ação dentro da função, que será apresentar um caixa vermelha
btnElement.onclick = function () {
var boxes = document.createElement("div");
boxes.style.width = '100px';
boxes.style.height = '100px';
boxes.style.backgroundColor = '#F00';
boxElement.appendChild(boxes);
};
