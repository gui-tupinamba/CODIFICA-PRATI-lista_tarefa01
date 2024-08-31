/* Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou equilátero.

Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo equilátero: possui todos os lados iguais (A=B e B=C) */

const prompt = require('prompt-sync')()

console.log('Verifique se o triángulo é Isósceles, Escaleno ou Equilátero.')

let a = Number(prompt('Digite o lado A do triángulo: '))
let b = Number(prompt('Digite o lado B do triángulo: '))
let c = Number(prompt('Digite o lado C do triángulo: '))

if ((a < (b + c)) && (b < (a + c)) && (c < (a + b)) ) {
    if ((a == b) && (b == c) && (c == a)) {
        console.log('Triângulo Equilátero')
    } else if ((a == b) || (a == c) || (c == b)) {
        console.log('Triângulo Isósceles')
    } else if  ((a != b) && (a != c) && (b != c)) {
        console.log('Triângulo Escaleno')
    }
} else {
    console.log('Os lados fornecidos não formam um triângulo válido.')
}