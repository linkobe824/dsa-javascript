//se tiene un array desordenado
//se inicia con el segundo elemento llamado currentVal = arr[i] con i desde 1 hasta arr[n-1]
// los valores a la izquierda mayores que el currentVal se recorren hacia la derecha y
// cuando el valor ya no sea mayor, se sustituye este por la currentVal.
//se repite hasta que se tenga el array ordenado


function insertionSort(arr) {
    for(let i = 1; i < arr.length ; i++){
        // guarda el elemento a la derecha de j
        let currentVal = arr[i]
        // es un elemento a la izquierda de currentVal (i)
        let j = i - 1;
        // este loop compara la currentVal con los elementos de la izquierda 
        // si si son menores que currentVal los recorre hacia la derecha
        //hasta que el elemento siquiente no sea mayor
        // ejemplo [3,2,4]  currentVal = 2, j = 0 ->[3,3,4] -> recorrio el 3 a la derecha
        // y j es - 1
        while (j >= 0 && arr[j] > currentVal){
            arr[j + 1] = arr[j];
            j--; 
        }
        // cambia el ultimo elemento donde se quedo (el repetido) por currentVal
        // [3,3,4] -> [2,3,4]
        arr[j + 1] = currentVal;
    }
    return arr;
}


console.log(insertionSort([7,6,3,8,16,10,21,11]))