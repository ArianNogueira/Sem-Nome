function inicio() {
    let res = document.getElementById('res')
    let num = window.prompt('Digite um número:')
    if (Number(num) % 2 == 0) {
        res.innerHTML = (`<p>O número ${num} que foi digitado é <strong>PAR</strong>!</p>`)
    } else {
        res.innerHTML = (`<p>O número ${num} que foi digitado é <strong>ÍMPAR</strong>!</p>`)
    }
}