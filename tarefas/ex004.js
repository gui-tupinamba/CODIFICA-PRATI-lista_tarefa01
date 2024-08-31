/* Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada. */

const prompt = require('prompt-sync')()

console.log('--- Menu ---')
console.log('(1) Soma')
console.log('(2) Subtração')
console.log('(3) Multiplicação')
console.log('(4) Divisão')
console.log('--- --- ---')

let opcao = prompt('Digite o NÚMERO da opção desejada: ')
let num1 = Number(prompt('Digite o primeiro número: '))
let num2 = Number(prompt('Digite o segundo número: '))

switch (opcao) {
    case '1':
        console.log(`Resultado: ${num1 + num2}`)
        break;
    case '2':
        console.log(`Resultado: ${num1 - num2}`)
        break;
    case '3':
        console.log(`Resultado: ${num1 * num2}`)
        break;
    case '4':
        if (num2 === 0) {
            console.log('Não é possível dividir por zero.')
        } else {
            console.log(`Resultado: ${num1 / num2}`)
        }
        break;
    default:
        console.log('Opção inválida.')
        break;
}