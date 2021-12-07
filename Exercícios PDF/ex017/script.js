let res = document.getElementById('res')

function iniciar() {
    let aleatorio = Math.floor(Math.random() * 100)
    res.innerHTML += (`<p>Acabei de pensar no número <mark>${aleatorio}</mark>!</p>`)
}

function limpar() {
    res.innerHTML = ''
}