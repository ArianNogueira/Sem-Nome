function reajuste() {
    let res = document.getElementById('res')
    let nome = window.prompt('Qual é o nome do funcionário?')
    let sal = window.prompt(`Qual é o  salário de ${nome}?`)
    let por = window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`)
    let sala = Number(sal)
    let aum = (sal * por) / 100
    let novoS = sala + aum
    res.innerHTML = (`<h2>${nome} recebeu um aumento salarial!</h2>`)
    res.innerHTML += (`<p>O salário atual era R$ ${sala.toLocaleString('pt-BR')}.<p>`)
    res.innerHTML += (`<p>Com um aumento de ${por}%, o salário vai aumentar R$ ${aum.toFixed(2).replace(".", ",")} no próximo mês.<p>`)
    res.innerHTML += (`<p>E a partir daí, ${nome} vai passar a ganhar R$ ${novoS.toLocaleString('pt-BR')}.<p>`)
}
