/* Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for. */

const prompt = require('prompt-sync')()
let num
let total = 0

for (let i = 1; i <= 5; i ++) {
    num = Number(prompt(`Escreva um ${i+1}º número: `))
    total += num
}

console.log(`A soma total dos 5 números é: ${total}`)