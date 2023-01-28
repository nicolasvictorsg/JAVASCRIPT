/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiquera e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual a condição escolhida e efetuar o cálculo adequado.

    condição de pagamento=
    1- à visa débito, recebe 10% de desconto;
    2- à vista no dinheiro ou pix, recebe 15% de desconto;
    3- em duas vezes, preço normal de etiqueta sem juros;
    4- acima de duas vezes, preço normal de etiquera + juros de 10%;
*/

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaDePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1))
}



