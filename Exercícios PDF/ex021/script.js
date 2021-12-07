function contar() {
    let res = document.getElementById('res')
    res.innerHTML += `<h2>Contando de 1 até 10</h2>`
    let c = 1
    while (c <= 10) {
        res.innerHTML += ` ${c} &#x1F449;`
        c++
    }
    res.innerHTML += ` &#x1F3C1;`
}
