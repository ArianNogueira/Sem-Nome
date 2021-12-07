var c = [5, 2, 7, 9, 6]
var soma = 0
var div = 0
var maior = 0
var menor = 0
var novo = 0

for (var n = 0; n < c.length; n++) {
    soma += c[n]
}

div = soma / c.length

//var maior = Math.max.apply(Math, c)
//var menor = Math.min.apply(Math, c)

for (var n = 0; n < c.length; n++) {
    novo += 1
    if (novo == 1) {
        maior = c[n]
        menor = c[n]
    } else {
        if (c[n] > maior) {
            maior = c[n]
        } 
        if (c[n] < menor) {
            menor = c[n]
        }
    }
}

console.log(`Ao todo foram ${c.length} números cadastrados.`)
console.log(`O maior valor informado foi ${maior}`)
console.log(`O menor valor informado foi ${menor}`)
console.log(`Somando todos os valores, temos ${soma}`)
console.log(`A média dos valores digitados é ${div}`)
