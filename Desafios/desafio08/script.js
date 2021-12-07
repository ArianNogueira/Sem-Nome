function desconto() {
    let res = document.getElementById('res')
    let nome = window.prompt('Qual é o produto que você está comprando?')
    let preço = window.prompt(`Qual é o preço de ${nome}`)
    let por = (preço * 10) / 100 
    let total = preço - por
    res.innerHTML = (`<h2>Calculando desconto de 10% para ${nome}</h2>`)
    res.innerHTML += (`<p>O preço original era R$ ${preço.toString(2).replace(".", ",")}.</p>`)
    res.innerHTML += (`<p>Você acaba de ganhar R$ ${por.toFixed(2).replace(".", ",")} de desconto (-10%).</p>`)
    res.innerHTML += (`<p>No fim, você vai ganhar R$ ${total.toFixed(2).replace(".", ",")} no produto ${nome}`)
}
