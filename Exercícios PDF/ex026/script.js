function contar() {
    let res = document.getElementById('res')
    let ni = Number(document.getElementById('numi').value)
    let nf = Number(document.getElementById('numf').value)
    res.innerHTML += `<h2>Contando de ${ni} até ${nf}</h2>`
    if (ni == nf) {
        res.innerHTML += 'Não é possivel contar, pois os números são iguais'
    } else if (ni > nf) {
        while (ni >= nf) {
            res.innerHTML += ` ${ni} &#x1F449`
            ni--
        }
    } else {
        while (ni <= nf) {
            res.innerHTML += ` ${ni} &#x1F449`
            ni++
        }
    }
    res.innerHTML += ' &#x1F3C1'
}