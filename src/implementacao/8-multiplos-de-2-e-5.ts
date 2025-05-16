function analiseMultiplos(numeros: number[]) {
    let multiplosDe2e5 = 0;
    let multiplosDe2e3 = 0;
    
    for (const numero of numeros) {
        if (numero === -1) continue;
        
        if (numero % 2 === 0 && numero % 5 === 0) {
            multiplosDe2e5++;
        }

        if (numero % 2 === 0 && numero % 3 === 0) {
            multiplosDe2e3++;
        }
    }
    
    return {
        multiplosDe2e5,
        multiplosDe2e3
    };
}

const valoresDigitados = [10, 15, 30, -1];
const resultado = analiseMultiplos(valoresDigitados);

console.log(`a) Múltiplos de 2 e 5: ${resultado.multiplosDe2e5}`);
console.log(`b) Múltiplos de 2 e 3: ${resultado.multiplosDe2e3}`);
