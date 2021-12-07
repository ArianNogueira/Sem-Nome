let x = 0
function contar() {
    let res = document.getElementById('res')
    res.innerHTML = (`<p>O contador está com <mark>${x += 1}</mark> cliques.</p>`)
}

function zerar() {
    let res = document.getElementById('res')
    res.innerHTML = ''
    x = 0
}