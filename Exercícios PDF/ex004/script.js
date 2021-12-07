function inicio() {
    let nome = window.prompt('Qual é o seu nome?')
    let res = document.getElementById('res')
    res.innerHTML = (`Olá, <strong>${nome}</strong>! É um grande prazer te conhecer! &#x1F596`)
}