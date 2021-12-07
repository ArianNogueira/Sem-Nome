function iniciar() {
    let res = document.getElementById('res')
    let v1 = window.prompt('Primeiro valor:')
    let v2 = window.prompt('Segundo valor:')
    let ops = window.prompt(`Valores informados: ${v1} e ${v2}.\nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`)
    res.innerHTML = ('<h2>Calculando...</h2>')

    switch(Number(ops)) {
        case 1:
            let soma = Number(v1) + Number(v2)
            res.innerHTML += (`<p>${v1} + ${v2} = <strong>${soma}</strong></p>`)
            break
        case 2:
            let sub = v1 - v2
            res.innerHTML += (`<p>${v1} - ${v2} = <strong>${sub}</strong></p>`)
            break
        case 3:
            let mult = v1 * v2
            res.innerHTML += (`<p>${v1} x ${v2} = <strong>${mult}</strong></p>`)
            break
        case 4:
            let div = v1 / v2
            res.innerHTML += (`<p>${v1} / ${v2} = <strong>${div}</strong></p>`)
            break
        default:
            res.innerHTML += (`<p>OPÇÃO INVÁLIDA! Você digitou ${v1} e ${v2}, mas não sei o que fazer com eles.</p>`)
            break
    }
}
