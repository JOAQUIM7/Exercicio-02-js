/*criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não 
       em entrar no concurso e mostre uma mensagem na tela.
*/


const students = [
    {
        name: "Lucas",
        n1: 8,
        n2: 6
    },

    {
        name: "Maria",
        n1: 7,
        n2: 2
    },

    {
        name: "Pedro",
        n1: 8,
        n2: 4
    },


    {
        name: "Carlos",
        n1: 7,
        n2: 6
    },


    {
        name: "Danilo",
        n1: 5,
        n2: 9
    }
]

function result(student) {
    if(((Number(student.n1) + Number(student.n2)) / 2) >= 7){
        return`Parabéns ${student.name}! Você foi aprovado!
        `
    }else{
        return`Não foi dessa vez ${student.name}! Tente novamente.  
        `
    }
}

for(let student of students){
    let average = (Number(student.n1) + Number(student.n2)) / 2
    let finalmeage = result(student)
    alert(`A media do(a) aluno(a) ${student.name} ${average} \n${finalmeage}`)
}