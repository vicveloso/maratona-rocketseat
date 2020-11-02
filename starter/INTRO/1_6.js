//Aula: Condicionais

function returnSexo(sexo) {
    if (sexo === "M") {
        return "Masculino";
    }
    else if (sexo === "F") {
        return "Feminino"
    }
    else{
        return "Outro"
    } 
}
var resultado = returnSexo ("M");
console.log(resultado)