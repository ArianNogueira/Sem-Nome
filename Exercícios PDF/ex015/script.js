function iniciar() {
    let res = document.getElementById('res')
    let data = new Date()
    let dias = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let dia = data.getDate()
    let mes = meses[data.getMonth()]
    let ano = data.getFullYear()
    let ds = dias[data.getDay()]
    let hora = data.getHours()
    let min = data.getMinutes()
    let seg = data.getSeconds()
    res.innerHTML = (`<p>Dia: <mark>${dia}</mark></p>`)
    res.innerHTML += (`<p>Mês: <mark>${mes}</mark></p>`)
    res.innerHTML += (`<p>Ano: <mark>${ano}</mark></p>`)
    res.innerHTML += (`<p>Dia da semana: <mark>${ds}</mark></p>`)
    res.innerHTML += (`<p>Hora: <mark>${hora}</mark></p>`)
    res.innerHTML += (`<p>Minutos: <mark>${min}</mark></p>`)
    res.innerHTML += (`<p>Segundos: <mark>${seg}</mark></p>`)
}