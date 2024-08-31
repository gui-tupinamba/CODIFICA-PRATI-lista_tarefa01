/* Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if. */

const prompt = require('prompt-sync')()

console.log('Verifique se o número é PAR ou ÍMPAR. \n')
let num = Number(prompt('Digite um número: '))

if (num % 2 === 0) {
    console.log(`${num} é um número par.`)
} else {
    console.log(`${num} é um número ímpar.`)
}