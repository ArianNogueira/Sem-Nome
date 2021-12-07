function Tabuada() {
    var txtnum = window.document.getElementById('txtn')
    var numero = Number(txtnum.value)
    var res = window.document.getElementById('res')
    if (numero == '') {
        window.alert('Por favor, digite um número!')
    } else {
        res.innerHTML = `Tabuada número ${numero}: <br>`
        var c = 1
        while (c <= 10) {
            var resp = c * numero
            res.innerHTML += (`${numero} X ${c} = ${resp} <br>`)
            c++
        }
    }
}
