var local = []
function adicionar() {
    for (c = 0; c <= 0; c++) {
    var n = document.getElementById('txtn')
    var res = document.getElementById('res')
        if (n.value > 100 || n.value.length == 0) {
            window.alert('Valor inválido ou já encontrado na lista')
        } else {
            var num = Number(n.value)
            //var local = []
            local.push(num)
            res.innerHTML += `O valor ${num} foi adicionado <br>`
        }
    }
}

function finalizar() {
    var n = document.getElementById('txtn')
    var res = document.getElementById('res')
    var num = Number(n.value)
    var resultado = local

    var soma = 0
    var div = 0
    var maior = 0
    var menor = 0
    var novo = 0
    for (var n = 0; n < local.length; n++) {
        novo += 1
        if (novo == 1) {
            maior = local[n]
            menor = local[n]
        } else {
            if (local[n] > maior) {
                maior = local[n]
            } 
            if (local[n] < menor) {
                menor = local[n]
            }
        }
    }

    for (var n = 0; n < local.length; n++) {
        soma += local[n]
    }
    div = soma / local.length

    res.innerHTML += '-------------------------------------------------------- <br>'
    res.innerHTML += `Ao todo foram ${local.length} números cadastrados. <br>`
    res.innerHTML += `O maior valor informado foi ${maior} <br>`
    res.innerHTML += `O menor valor informado foi ${menor} <br>`
    res.innerHTML += `Somando todos os valores, temos ${soma} <br>`
    res.innerHTML += `A média dos valores digitados é ${div} <br>`
}
