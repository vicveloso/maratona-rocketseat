var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];
//for of: valor dentro da variavel que eu quero procurar dados. No caso valor dentro do objeto "usuarios"
for (const value of usuarios) {
       //especificando o dado que eu quero
       console.log(`O ${value.nome} possui as habilidades: ${value.habilidades}`)
}


