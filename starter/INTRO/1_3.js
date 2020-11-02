//Aula: Variaveis e dados
        var name = "Diego"; //string
        var idade = 23; //inteiro
        var peso = 80.5; //float = decimais
        var humano = true; //boleano = true ou false
        var alunos = ['Lucas', 'Diego', 'Paulo']; //vetores = armazena valores para a variavel em questão
        var aluno = {
        nome: 'Diego',
        idade: 23,
        peso: 80.5,
        humano: true,
        }; //objetos variveis que guardam mais de um valor para dado item
        console.log(aluno.peso)//encontrar variavel dentro do objeto
        console.log(alunos[0]) // encontrar variavel dentro do vetor na posição indicada
        console.log("O "+alunos[1]+" pesa "+aluno.peso+"?");//forma simples de mesclar expressão e dados
        console.log(`O ${alunos[1]} pesa ${aluno.peso}?`)//forma mais legivel de mesclar expressões e dados = Template String
