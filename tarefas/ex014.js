/* Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while. */

const prompt = require('prompt-sync')()

console.log('Descubra o fatorial.')
// let num = Number(prompt('Digite um número: '))
let num = 5
let fatorial = num
let count = num

if (num === 0) {
    console.log('Fatorial de 0 é 1.')
} else if (num > 0) {
    while(count != 1) {
        fatorial *= count - 1
        count--
    }
    console.log(`O fatorial de ${num} é ${fatorial}.`)
}

console.log('Fim')