/* As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */

const prompt = require('prompt-sync')()

let qtdMaca = Number(prompt('Quantidade de maçãs compradas: '))
let valorTotal

if (qtdMaca < 12) {
    valorTotal = qtdMaca * 0.30
    if (qtdMaca == 1) {
        console.log(`Com ${qtdMaca} maçã, o valor total fica de R$${valorTotal.toFixed(2)}`)
    } else { 
        console.log(`Com o total de ${qtdMaca} maçãs, o valor total fica de R$${valorTotal.toFixed(2)}`)
    }
} else if (qtdMaca >= 12) {
    valorTotal = qtdMaca * 0.25
    console.log(`Com o total de ${qtdMaca} maçãs, o valor total fica de R$${valorTotal.toFixed(2)}`)
} else {
    console.log('Quantidade inválida.')
}