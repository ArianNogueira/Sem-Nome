let ale = Math.floor(Math.random() * 10 + 1)

function tentar() {
    //window.alert(ale)
    let res = document.getElementById('res')
    let num = window.prompt('Qual é o seu palpite?')
    if (Number(num) == ale) {
        res.innerHTML += (`<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${ale}!</p>`)
        document.getElementById('botao').style.visibility = 'hidden'
    } else if (Number(num) < ale) {
        res.innerHTML += (`<p>Você falou ${num}. Meu número é <strong>MAIOR</strong>!</p>`)
    } else {
        res.innerHTML += (`<p>Você falou ${num}. Meu número é <strong>MENOR</strong>!</p>`)
    }
}
