function verificar() {
    let res = document.getElementById('res')
    let pan = Number(window.prompt('Qual era o preço anterior do produto?'))
    let pat = Number(window.prompt('Qual é o preço atual do produto?'))
    res.innerHTML = `<h2>Analisando os valores informados</h2>`
    res.innerHTML += `<p>O produto custava R$ ${pan.toFixed(2).replace(".", ",")} e agora custa R$ ${pat.toFixed(2).replace(".", ",")}.</p>`
    if (pan < pat) {
        let pre = pat - pan
        let vari = (pre * 100) / pan
        res.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        res.innerHTML += `<p>O preço subiu R$ ${pre.toFixed(2).replace(".", ",")} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${vari.toString().replace(".", ",")}% pra cima.</p>`
    } else if (pan > pat) {
        let prec = pan - pat
        let varia = (prec * 100) / pat
        res.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        res.innerHTML += `<p>O preço caiu R$ ${prec.toFixed(2).replace(".", ",")} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${varia.toFixed(2).replace(".", ",")}% pra baixo.</p>`
    } else {
        res.innerHTML += `<p>O produto manteve o mesmo preço.</p>`
        res.innerHTML += `<p>O preço se manteve igual</p>`
        res.innerHTML += `<p>Não teve variação no preço do produto.</p>`
    }
}