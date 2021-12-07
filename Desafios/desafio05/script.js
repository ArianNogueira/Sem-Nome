function converter() {
    let res = document.getElementById('res')
    let dis = window.prompt('Digite uma distância em metros (m)')
    let km =  dis / 1000
    let hm = dis / 100
    let dam = dis / 10
    let dm = dis * 10
    let cm = dis * 100
    let mm = dis * 1000
    res.innerHTML = (`<h2>A distância de ${dis.toString().replace(".", ",")} metros, corresponde a...</h2>`)
    res.innerHTML += (`<p>${km.toFixed(3).replace(".", ",")} quilômetros (Km)</p>`)
    res.innerHTML += (`<p>${hm.toFixed(3).replace(".", ",")} hectômetros (Hm)</p>`)
    res.innerHTML += (`<p>${dam.toFixed(3).replace(".", ",")} decâmetros (Dam)</p>`)
    res.innerHTML += (`<p>${dm.toLocaleString('pt-BR')} decímetros (dm)</p>`)
    res.innerHTML += (`<p>${cm.toLocaleString('pt-BR')} centímetros (cm)</p>`)
    res.innerHTML += (`<p>${mm.toLocaleString('pt-BR')} milímetros (mm)</p>`)
}