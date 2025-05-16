function mostrarImparesEntreMeN(primeiroNumero: number, segundoNumero: number): void {
    for(let i = primeiroNumero; i <= segundoNumero; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }    
}

console.log("Impares entre 3 e 10:");
mostrarImparesEntreMeN(3, 10);
console.log("\nImpares entre 15 e 20:");
mostrarImparesEntreMeN(15, 20);
console.log("\nImpares entre 1 e 5:");
mostrarImparesEntreMeN(1, 5);



