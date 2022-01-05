/* CONDIÇÕES

    if (condição){      CONDIÇÃO SIMPLES
        true
    }

    if (condição){
        true
    } else{
        false
    }
*/

var vel = 15;
console.log(`a velocidade do seu carro é ${vel} km/h`)
if (vel > 60){  //condição simples
    console.log('você ultrapassou a velocidade permitida.')
}
console.log('Dirija sempre usando cinto de segurança.')

var país = 'EUA'
console.log(`vivendo em ${país}`)
if (país == 'Brasil') {
    console.log('brasileiro')
} else{
    console.log('estrangeiro')
}