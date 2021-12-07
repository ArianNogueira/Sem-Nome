function iniciar() {
    let res = document.getElementById('res')
    let nasc = window.prompt('Em que ano você nasceu?')
    let data = new Date()
    let ano = data.getFullYear()
    let idade = ano - nasc
    if (nasc >= ano) {
        window.alert('[ERRO]! Verifique os dados e tente novamente.')
    } else {
        res.innerHTML = (`<p>Quem nasceu em ${nasc} vai completar <strong>${idade}</strong> anos em ${ano}.</p>`)
    }
}