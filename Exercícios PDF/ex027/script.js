function tabuada() {
    let res = document.getElementById('res')
    let num = Number(document.getElementById('num').value)
    res.innerHTML = `<h2>Tabuada de ${num}</h2>`
    for (let c = 1; c <= 10; c++) {
        let mult = num * c
        res.innerHTML += `${num} x ${c} = <strong>${mult}</strong> <br>`
    }
}