function calcular() {
    let n1 = window.prompt('Digite um número:')
    let n2 = window.prompt('Digite outro número:') 
    let res = document.getElementById('res')
    let soma = Number(n1) + Number(n2)
    res.innerHTML = `<p>A soma entre <mark>${n1}</mark> e <mark>${n2}</mark> é igual a <strong>${soma}</strong>!</p>` 
}