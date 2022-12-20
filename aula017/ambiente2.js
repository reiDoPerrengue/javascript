var nota = [ 6, 10, 5]
var sum = nota.reduce((accumulator,value) => accumulator + value,0);
var notafinal = (sum) /nota.length;

if(notafinal <=6) {
    console.log ('Aluno REPROVADO com nota final '+Math.trunc((notafinal)))
} else{
    console.log ('Aluno APROVADO com nota final '+Math.trunc((notafinal)))
}