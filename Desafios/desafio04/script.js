function troco() {
    let prod = window.prompt('Que produto você está comprando?')
    let pre = window.prompt(`Quanto custa ${prod} que você está comprando?`)
    let valor = window.prompt(`Qual foi o valor que você deu para pagar ${prod}?`)
    let dev = Number(valor) - Number(pre)
    window.alert(`Você comprou ${prod} que custou R$ ${pre},00. 
Deu R$ ${valor},00 em dinheiro e vai receber R$ ${dev},00 de troco. 
Volte Sempre!`)
}