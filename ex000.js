/* 
    faça um programa para calcular o valor de uma viagem
    voce tera 3 variaveis
    1- preco do combustivel
    2- gasto medio do combustivel do carro por km
    3- distancia em km da viagem

    imprima no console o valor que sera gasto para realiza a viagem
*/

const precoCombustivel = 4.98;
const kmPorLitro = 10.3;
const distanciaEmKm = 434.9;

const litrosConsumido = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumido * precoCombustivel;

console.log(valorGasto.toFixed(2))