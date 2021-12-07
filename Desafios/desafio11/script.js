function verificar() {
    let res = document.getElementById('res')
    let ano = Number(window.prompt('Qual é o ano que você quer verificar?'))
    res.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>`
    if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
        res.innerHTML += `<p>O ano de ${ano} <mark01><strong>É BISSEXTO</strong></mark01>&#x2705</p>`
    } else {
        res.innerHTML += `<p>O ano de ${ano} <mark><strong>NÃO É BISSEXTO</strong></mark>&#x274C</p>`
    }
}
