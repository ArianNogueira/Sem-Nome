function contar() {
    let res = document.getElementById('res')
    res.innerHTML += '<h2>Números pares de 1 até 10</h2>'
    let c = 1
    while (c <= 10) {
        if (c % 2 == 0) {
            res.innerHTML += ` ${c} &#x1F449;`
        }
        c++
    }
    res.innerHTML += ` &#x1F3C1;`
}