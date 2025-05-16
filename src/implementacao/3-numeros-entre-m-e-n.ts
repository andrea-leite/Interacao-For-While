function mostrarNumerosEntreMeN(primeiroNumero: number, segundoNumero: number) {
    if (primeiroNumero >= segundoNumero) {
        return [];
    }
    
    const numeros = [];
    
    for (let i = primeiroNumero; i <= segundoNumero; i++) {
        numeros.push(i);
    }
    
    return numeros;
}

const numeroInicial = 5;
const numeroFinal = 15;


console.log(`Números entre ${numeroInicial} e ${numeroFinal}: ${mostrarNumerosEntreMeN(numeroInicial, numeroFinal)}`);


