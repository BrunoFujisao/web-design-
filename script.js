const prompt = require('prompt-sync')();

console.log("--------Sistema de Notas--------");

// Solicita as três notas ao usuário
let nome = prompt("Digite o nome do aluno: ");
let numero1 = parseFloat(prompt("Digite o valor do primeiro bimestre: "));
let numero2 = parseFloat(prompt("Digite o valor do segundo bimestre: "));
let numero3 = parseFloat(prompt("Digite o valor do terceiro bimestre: "));
let numero4 = parseFloat(prompt("Digite o valor do quarto bimestre: "));

// Validação das entradas
if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3) || isNaN(numero4)) {
    console.log("Por favor, insira apenas números válidos.");
} else {
    // Calcula a média
    let media = (numero1 + numero2 + numero3 + numero4) / 4;

    // Formata a média com 2 casas decimais
    let mediaFormatada = media.toFixed(2);

    // Exibe as notas e o resultado da média
    console.log("\nSuas notas foram:");
    console.log("Nota 1:", numero1);
    console.log("Nota 2:", numero2);
    console.log("Nota 3:", numero3);
    console.log("Nota 4:", numero4);
    let frase = `O resultado da média do aluno(a) ${nome} é: ${mediaFormatada}.` //imprimindo frase 
    console.log(frase);

    // Exibe a situação do aluno
    if (media >= 7) {
        console.log("Parabéns! Você foi aprovado.");
    } else {
        console.log("Infelizmente, você foi reprovado.");
    }
}
