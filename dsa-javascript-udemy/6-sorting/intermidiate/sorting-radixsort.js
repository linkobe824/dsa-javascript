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

//Funcion que acepte una lista de numeros
function radixSort(nums) {
    // Encuentra el numero de digitos mas grande dentro de la lista
    let maxDigtis = mostDigits(nums);
    // Recorre desde k=0 hasta el numero de digitos mas grande
    for (let i = 0; i < maxDigtis; i++) {
        //para cada iteracion del loop
        // crea una cubeta para cada digito (0-9)
        const buckets = Array.from(Array(10), () => [])
        // acomoda cada numero en la cubeta correspondiente basado
        // en su digito k-esimo
        for (let j = 0; j < nums.length; j++){
            let digit = getDigit(nums[j], i);
            buckets[digit].push(nums[j]);
        }
        // reemplaza el array existente con los valores en las cubetas
        // de 0 a 9
        nums = [].concat(...buckets);
    }
    return nums;
}

let arr = [1234,53423,65,5436,754,87,6,3456,3,234,7,65,5647];

console.log(radixSort(arr));
