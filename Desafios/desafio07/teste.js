let d = 4.95
let r = 250.50
let total = r / d
let dolar = d.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
let real = r.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
let valor = total.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
console.log(`Você com ${real} tendo como o dólar a ${dolar}, poderá comprar ${valor}`)
