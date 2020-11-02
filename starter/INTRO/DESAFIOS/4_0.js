function experiencia (anos) {
    if (anosEstudos <0 && anosEstudos <1) {
        return "Iniciante";
    }
    
    else if (anosEstudos >1 && anosEstudos <3) {
        return "Intermediário";
    }
    
    else if (anosEstudos >3 && anosEstudos <6) {
        return "Avançado";
    }
    
    else if (anosEstudos >7) {
        return "Jedi Master";
    }
      
}
var anosEstudos = 10;
var resultado = experiencia (anosEstudos)
console.log(resultado)