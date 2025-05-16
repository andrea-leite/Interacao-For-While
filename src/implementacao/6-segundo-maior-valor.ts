function mostrarSegundoMaiorValor(numeros: number[]): number | null {
    if (numeros.length < 2) {
        return null;
    }

    const numerosOrdenados = [...numeros].sort((a, b) => b - a);
    
    for (let i = 1; i < numerosOrdenados.length; i++) {
        if (numerosOrdenados[i] < numerosOrdenados[0]) {
            return numerosOrdenados[i];
        }
    }
    
    return null;
}

const numeros = [10, 25, 3, 18];
console.log("Segundo maior valor:", mostrarSegundoMaiorValor(numeros));

