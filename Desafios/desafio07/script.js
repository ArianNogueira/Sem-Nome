let dolar = window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')

function converter() {
    let reais = window.prompt('Quanto R$ você tem na carteira?')
    let res = document.getElementById('res')
    let total = reais / dolar
    let valor = total.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
    res.innerHTML = (`<p>Você com R$${reais} tendo como o dólar a US$${dolar}, poderá comprar ${valor}.</p>`)
}
