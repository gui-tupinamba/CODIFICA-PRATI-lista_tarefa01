/* Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else. */

const prompt = require('prompt-sync')()

console.log('Calculadora de Índice de Massa Corporal')

let nome = prompt('Informe seu nome: ')
let peso = Number(prompt('Informe seu peso (em kg): '))
let altura = Number(prompt('Informe sua altura (em m): '))

let imc = peso / (altura ** 2)
console.log(`${nome}, seu IMC é ${imc.toFixed(2)}`)

if (imc < 18.5) {
    console.log('Você está com baixo peso.')
} else if (imc >= 18.5 && imc < 25) {
    console.log('Você está com peso normal.')
    } else if (imc >= 25 && imc < 30) {
    console.log('Você está com sobrepeso.')
} else {
    console.log('Você está com obesidade.')
}