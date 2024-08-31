/* Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else. */

const prompt = require('prompt-sync')()


let age = Number(prompt("Informe a idade:")); 

if (age < 0) {
    console.log("Idade inválida!");
} else if (age <= 12) {
    console.log("Criança");
} else if (age <= 18) {
    console.log("Adolescente");
} else if (age <= 65) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}