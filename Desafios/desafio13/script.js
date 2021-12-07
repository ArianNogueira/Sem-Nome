function verificar() {
    let res = document.getElementById('res')
    let nome = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt(`Primeira nota de ${nome}:`))
    let n2 = Number(window.prompt(`Segunda nota de ${nome}:`))
    res.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
    let media = (n1 + n2) / 2
    if (media > 6) {
        res.innerHTML += `<p>Com as notas ${n1.toString().replace(".",",")} e ${n2.toString().replace(".",",")}, a <strong>média é ${media.toFixed(2).replace(".",",")}</strong></p>`
        res.innerHTML += `<p>Com média acima de 6,0, o aluno está <mark><strong>APROVADO</strong></mark></p>`
    } else if (media >= 3 && media <= 6) {
        res.innerHTML += `<p>Com as notas ${n1.toString().replace(".",",")} e ${n2.toString().replace(".",",")}, a <strong>média é ${media.toString().replace(".",",")}</strong></p>`
        res.innerHTML += `<p>Com média entre 3,0 e 6,0, o aluno está em <mark01><strong>RECUPERAÇÃO</strong></mark01></p>`
    } else {
        res.innerHTML += `<p>Com as notas ${n1.toString().replace(".",",")} e ${n2.toString().replace(".",",")}, a <strong>média é ${media.toString().replace(".",",")}</strong></p>`
        res.innerHTML += `<p>Com média abaixo de 3,0, aluno está <mark02><strong>REPROVADO</strong><mark02></p>`
    }
}
