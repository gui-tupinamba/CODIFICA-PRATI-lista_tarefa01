/* Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números. */

const prompt = require('prompt-sync')()

console.log('Este algoritmo calcula a média aritmética de números decimais.')
console.log('Para encerrar a entrada de dados, digite 0.')
let num1 = Number(prompt('Insira um primeiro número: '))
let counter = 0
let sum = 0

while(num1 !== 0){
    sum += num1
    counter++
    num1 = Number(prompt('Insira um outro número: '))
}

console.log(`A média aritmetica é: ${sum / counter}`)
