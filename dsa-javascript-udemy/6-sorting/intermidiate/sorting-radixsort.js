//funcion para obtener el digito en una posicion dada
// (12345, 0) -> 5, (12345, 3) -> 2, (12345, 8) -> 0
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

//funcion que retorna el numero de digitos en un numero
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

// funcion que retorna la cantidad de numeros en el numero mas grande de un array
function mostDigits(arr) {
    let maxDigits = 0
    for(let i = 0; i < arr.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
}
