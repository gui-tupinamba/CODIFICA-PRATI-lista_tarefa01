/* Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente. */

const prompt = require('prompt-sync')()

console.log('Do menor para o maior, digite dois números que sejam diferentes.')

let num1 = prompt('Digite um primeiro número: ')
let num2 = prompt('Digite um segundo número: ')

if (num1 === num2 ) {
    console.log('Os números são iguais, não foi possível determinar a ordem.')
} else {
    if (num1 < num2) {
        console.log(`Os números em ordem crescente são: ${num1}, ${num2}`)
    } else {
        console.log(`Os números em ordem crescente são: ${num2}, ${num1}`)
    }
}











