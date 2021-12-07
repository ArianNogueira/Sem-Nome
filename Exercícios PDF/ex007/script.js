function calcular() {
    let res = document.getElementById('res')
    let nome = window.prompt('Qual é o nome do aluno?')
    let nota1 = window.prompt(`Qual foi a primeira nota de ${nome}`)
    let nota2 = window.prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}?`)
    let media = (Number(nota1) + Number(nota2)) / 2
    res.innerHTML = ''
    res.innerHTML += `<p>Calculando a média final de <mark>${nome}</mark>.</p>`  
    res.innerHTML += `<p>As notas obtidas foram <mark>${nota1} e ${nota2}</mark>.</p>`
    res.innerHTML += `<p>A média final será <mark>${media}</mark>.</p>`
}