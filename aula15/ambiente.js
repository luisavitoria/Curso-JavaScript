let num = [5, 8, 2, 9]
console.log(num)

num[4] = 6
num.push(7) //adiciona o valor na ultima posição do vetor
console.log(num.length)


console.log(num)
console.log(num.sort()) //ordena os numeros em ordem crescente 

for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num) {  //so funciona para array (para cada posição dentro de num...)
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

num.indexOf(7)  //num.index() retorna o valor da posiçao onde esta o numero 7. se nao tiver o numero, retorna o valor -1

let posicao = num.indexOf(6)
console.log(posicao)