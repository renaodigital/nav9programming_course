//  06 - Uma imobiliária paga às pessoas corretoras de imóveis um salário fixo por
//  mês e uma comissão de acordo com o valor de vendas realizado por elas. Faça
//  um programa que calcule e imprima no console o valor total recebido pela
//  pessoa corretora de imóveis no mês.

//  Os valores de entrada serão:
//  Salário Fixo;
//  Valor total vendido;
//  Porcentagem da comissão.

let SalarioFixo = 2000;
let valorImovelVendido = 200000;
let porcentagemComissao = valorImovelVendido*50/100;
let salario = SalarioFixo + porcentagemComissao;

console.log(salario);

// Done