function somarNumerosEntreMeN(primeiroNumero: number, segundoNumero: number): number {
    if (primeiroNumero > segundoNumero) {
        return 0;
    }
    
    let soma = 0;
    for (let i = primeiroNumero; i <= segundoNumero; i++) {
        soma += i;
    }
    
    return soma;
}

console.log(somarNumerosEntreMeN(1, 5));
console.log(somarNumerosEntreMeN(10, 15));
console.log(somarNumerosEntreMeN(3, 6));
