function contar() {
    let res = document.getElementById('res')
    let num = Number(document.getElementById('txtp').value)
    res.innerHTML += `<h2>Contando de 0 até ${num}</h2>`
    let c = 0
    while (c <= num) {
        res.innerHTML += ` ${c} &#x1F449`
        c++
    }
    res.innerHTML += ' &#x1F3C1'
}