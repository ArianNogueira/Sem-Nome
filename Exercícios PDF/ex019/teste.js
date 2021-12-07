let v1 = 9
let v2 = 5
let ops = 1

switch (ops) {
    case 1:
        let soma = Number(v1) + Number(v2)
        console.log(`${v1} + ${v2} = ${soma}`)
        break
    case 2:
        let sub = Number(v1) - Number(v2)
        console.log(`${v1} - ${v2} = ${sub}`)
        break
    case 3:
        let mult = Number(v1) * Number(v2)
        console.log(`${v1} x ${v2} = ${mult}`)
        break
    case 4:
        let div = Number(v1) / Number(v2)
        console.log(`${v1} / ${v2} = ${div}`)
        break
    default:
        console.log(`OPÇÃO INVÁLIDA! Você digitou ${v1} e ${v2}, mas não sei o que fazer com eles.`)
}