function antedepos() {
    let n = window.prompt('Digite um número inteiro qualquer')
    let num = Number(n)
    window.alert(`Antes de ${num}, temos o número ${num - 1}.\nDepois de ${num}, temos o número ${num + 1}.`)
}