var idade = 65
if (idade < 16) {
    console.log('não vota')
} else if (idade < 18 || idade > 65){
   console.log('voto opcional')
} else {
    console.log('voto obrigatorio')
}

//outro exemplo

/*
var agora = new Date()
var hora = agora.getHours()
console.log(`agora são exatamente ${hora} horas.`)

if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
*/

//condições multiplas - switch (sempre usar break no final de cada case. Serve para testes pontuais, nao para intervalos)

 var agora = new Date()
 var diaSem = agora.getDay()

 /*
 0 = domingo / 1 = segunda / 2 = terça / 3 = quarta / 4 = quinta / 5 = sexta / 6 = sabado
 */

 switch(diaSem) {
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda')
        break 
    case 2: 
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break 
    case 5: 
        console.log('sexta')
        break 
    case 6:
        console.log('sábado')
        break
    default:
        console.log('dia inválido')
        break
    }
