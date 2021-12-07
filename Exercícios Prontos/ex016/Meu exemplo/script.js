function Contar() {
    var txtinicio = window.document.getElementById('txti')
    var inicio = Number(txtinicio.value)
    var txtfim = window.document.getElementById('txtf')
    var fim = Number(txtfim.value)
    var txtpasso = window.document.getElementById('txtp')
    var passo = Number(txtpasso.value)
    var res = window.document.getElementById('res')
    if (inicio == '' || fim == '') {
        res.innerHTML = 'Impossível contar!'
    } else if (passo == 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        passo = 1
        res.innerHTML = 'Contando <br>'
        for (inicio; inicio <= fim; inicio += passo) {
            res.innerHTML += inicio
        }
    } else {
        res.innerHTML = 'Contando <br>'
        for (inicio; inicio <= fim; inicio += passo) {
            res.innerHTML += inicio
        }
    }
}
