/* 
    faça um programa para calcular o valor de uma viagem
    voce tera 5 variaveis
    1- preço do etanol
    2- preço gasolina
    3- o tipo de coombustivel que esta no seu carro
    4- gasto medio do combustivel do carro por km
    5- distancia em km da viagem 

    imprima no console o valor que sera gasto para realiza a viagem
*/

const precoGasolina = 5.79;
const precoEtanol = 3.80
const tipoCombustivel = 'Gasolina';
const kmPorLitro = 10;
const distanciaEmKm = 100;

const litrosConsumido = distanciaEmKm / kmPorLitro;

if (tipoCombustivel === 'Gasolina') {
    valorGasto = litrosConsumido * precoGasolina;
} else {
    valorGasto = litrosConsumido * precoEtanol;
}
console.log(valorGasto.toFixed(2))




