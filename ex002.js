/*
    faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classsificação conforme a tabela abaixo.

    média = (nota 1 + nota 2 + nota 3) / 3;
    classificação =
    - média menor que 5, reprovação;
    - média entre 5 e 7, recuperação;
    - média acima e 7, passou de semestre.
*/

const nota1 = 10;
const nota2 = 9;
const nota3 = 6;

const media = (nota1 + nota2 + nota3) / 3;
console.log(media.toFixed(1));

if (media < 5) {
    console.log('Aluno reprovado!')
} else if (media >= 5 && media <= 7) {
    console.log('Aluno em recuperação!')
} else {
    console.log('Aluno aprovado!')
}

