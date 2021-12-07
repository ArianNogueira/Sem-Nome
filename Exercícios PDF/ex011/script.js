function calcular() {
    let res = document.getElementById('res')
    let nome = window.prompt('Qual é o nome do aluno?')
    let n1 = window.prompt(`Qual foi a primeira nota de ${nome}?`)
    let n2 = window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`)
    let media = (Number(n1) + Number(n2)) / 2
    res.innerHTML = (`<p>Calculando a média final de <mark>${nome}</mark>.</p>`)
    res.innerHTML += (`<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`)
    res.innerHTML += (`<p>A média final será <mark>${media}</mark>.</p>`)
    if (media >= 6) {
        res.innerHTML += (`<p>A mensagem que temos é:
        <strong><font color="red">Meus parabéns!</font></strong></p>`)
    } else {
        res.innerHTML += (`<p>A mensagem que temos é: <strong><font color="red">Estude um pouco mais!</font></strong></p>`)
    }
}