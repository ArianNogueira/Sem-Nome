function maior() {
    let res = document.getElementById('res')
    let num1 = window.prompt('Digite um número:')
    let num2 = window.prompt('Digite outro número:')
    let mai = 0
    if (num1 > num2) {
        mai = num1
    } else {
        mai = num2
    }
    res.innerHTML = (`<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, o maior valor é <strong>${mai}</strong></p>`)
    if (num1 == num2) {
        res.innerHTML = (`<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, ambos são <strong>IGUAIS</strong></p>`)
    }
}
