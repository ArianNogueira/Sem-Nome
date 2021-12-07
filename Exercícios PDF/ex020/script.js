function iniciar() {
    let res = document.getElementById('res')
    let m = window.prompt('Digite o mês em extenso (ex: Setembro) ou em número (ex: 08, 09, 10...)')
    let num = Number(m)
    let mes = m.toUpperCase()
    switch (mes, num) {
        case 'JANEIRO', 01:
        case 'FEVEREIRO', 02:
        case 'MARÇO', 03:
            res.innerHTML = (`<p>No mês de <mark>${m}</mark>, estamos na estação <mark><strong>INVERNO</strong></mark>.</p>`)
            break
        case 'ABRIL', 04:
        case 'MAIO', 05:
        case 'JUNHO', 06:
            res.innerHTML = (`<p>No mês de <mark>${m}</mark>, estamos na estação <mark><strong>PRIMAVERE</strong></mark>.</p>`)
            break
        case 'JULHO', 07:
        case 'AGOSTO', 08:
        case 'SETEMBRO', 09:
            res.innerHTML = (`<p>No mês de <mark>${m}</mark>, estamos na estação <mark><strong>VERÃO</strong></mark>.</p>`)
            break
        case 'OUTUBRO', 10:
        case 'NOVEMBRO', 11:
        case 'DEZEMBRO', 12:
            res.innerHTML = (`<p>No mês de <mark>${m}</mark>, estamos na estação <mark><strong>OUTONO</strong></mark>.</p>`)
            break
        default:
            res.innerHTML = (`<p>No mês de <mark>${m}</mark>, estamos na estação <mark><strong>INDEFINIDA</strong></mark>.</p>`)
            break
    }
}