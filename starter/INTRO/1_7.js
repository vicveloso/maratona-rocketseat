//Aula: Operadores lógicos
var nome = "Diego";
var idade = 30;
var profissão = "Estudante";
var sexo = "M";
//operador "e"
if (nome === "Diego" && idade >18 ) {
    console.log(`${nome} é maior de idade E ${profissão}`)
    
} else if (nome === "Diego" && idade <18 ){
    console.log(`${nome} não é maior de idade`)

}

//operador "ou"
if (nome === "Diego" || idade >18 ) {
    console.log(`${nome} é maior de idade E ${profissão}`)
    
} else if (nome === "Diego" || idade <18 ){
    console.log(`${nome} não é maior de idade`)

}

//operador "diferente"

if (sexo !== "M") {
    console.log("Feminino")
}
else {
    console.log("Masculino")
}
