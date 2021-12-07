window.alert('Seja bem-vindo(a) ao meu site!')
function calcular() {
    let numero = window.prompt('Digite um número:')
    let res = document.getElementById('res')
    let dobro = numero * 2
    let metade = numero / 2
    res.innerHTML = (`<p>O dobro de ${numero} é ${dobro} e a metade é ${metade}!</p>`)
}