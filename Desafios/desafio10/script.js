function calcular() {
    let res = document.getElementById('res')
    let a = window.prompt('Qual é o valor de a?')
    let b = window.prompt('Qual é o valor de b?')
    let c = window.prompt('Qual é o valor de c?')
    let delta = b ** 2 - 4 * a * c
    res.innerHTML = (`<h2>Resolvendo Bhaskara</h2>`)
    res.innerHTML += (`<p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong></p>`)
    res.innerHTML += (`<p>O cálculo realizado será <strong>&Delta; = ${b}<sup>2</sup> - 4 . ${a} . ${c}</strong></p>`)
    res.innerHTML += (`<p>O valor calculado foi <mark><strong>&Delta; = ${delta}</strong></mark></p>`)
    if (delta > 0) {
        let x1 = (-Number(b) + Math.sqrt(delta)) / 2 * a
        let x2 = (-b - Math.sqrt(delta)) / 2 * a
        res.innerHTML += (`<p>O cálculo realizado será <strong>X = -(${b} +- &Sqrt; ${delta}) / 2 . ${a}</strong></p>`)
        res.innerHTML += (`<p>O valor calculado de <mark><strong>x<sub>1</sub> = ${x1}</strong></mark></p>`)
        res.innerHTML += (`<p>O valor calculado de <mark><strong>x<sub>2</sub> = ${x2}</strong></mark></p>`)
    } else if (delta == 0) {
        let x = -b / 2 * a
        res.innerHTML += (`Para delta igual a 0, temos uma raiz Real ou duas iguais, <mark><strong>${x}</strong></mark>`)
    } else {
        res.innerHTML += ('Não é possivel realizar a operação, pois delta é negativo')
    }
}
