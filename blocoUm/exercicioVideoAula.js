// Crie variáveis para armazenar algumas informações de cadastro de um estudante, são elas:
// nome, sobrenome, dia do nascimento, mês do nascimento, ano do nascimento.
// A partir dessas informações, você deve mostrar um relatório na tela da seguinte forma: 
// Nome Completo, Data de Nascimento:

// Exemplo de Saída:
// Nome Completo: Renan Gomes Lemos
// Data de Nascimento: 14/01/1998

const name = "Renan";
const lastName = "Lemos";
const day = 14;
const month = "0" + 1;
const year = 1998;

console.log("Nome Completo: " + name + " " + lastName);
console.log("Data de Nascimento: " + day + "/" + month + "/" + year);
