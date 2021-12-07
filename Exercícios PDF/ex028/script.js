function fatorial() {
    let res = document.getElementById('res')
    let num = Number(document.getElementById('numf').value)
    if (num <= 0 || num > 21) {
        window.alert('O valor deve ser maior ou igual a 1.')
    } else {
        res.innerHTML += `<h2>Calculando ${num}!</h2>`
        let fat = 1
        for (let c = 1; num >= c; num--) {
            fat *= num 
            res.innerHTML += `${num}`
            if (c == num) {
                res.innerHTML += ' ='
            } else {
            res.innerHTML += ' x '
            }
        }
        res.innerHTML += ` <strong>${fat.toLocaleString('pt-BR')}</strong>`
    }
}