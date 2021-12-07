function converter() {
    let res =  document.getElementById('res')
    let temp = window.prompt('Digite uma temperatura em °C (Celsius)')
    let kel = Number(temp) + 273.15
    let fah = (Number(temp) * 9 / 5) + 32
    res.innerHTML = (`<h2>A temperatura de ${temp.toString().replace(".", ",")}°C, corresponde a...</h2>`)
    res.innerHTML += (`<p>${kel.toFixed(2).replace(".", ",")}°K (Kelvin)</p>`)
    res.innerHTML += (`<p>${fah.toFixed(2).replace(".", ",")}°F (Fahrenheit)</p>`)
}