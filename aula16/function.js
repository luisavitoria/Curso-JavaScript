function parImpar(n){
    if(n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar'
    }
}
console.log(parImpar(5))

let v = function(x) {
    return x**2
}
console.log(v(3))

function fatorial(n) { //recursividade
    if(n == 1 || n == 0){
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}

console.log(fatorial(0))