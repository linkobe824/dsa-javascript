// funcion acepta tres argumento, A, inicio y fin
function pivot(arr, start=0, end= arr.length - 1) {
    //funcion de intercambio
    function swap(arr, i, j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // elige al pivote para ser el inicio del array
    let pivotElem = arr[start];
    // Guarda el indice del pivote actual en una variable
    let pivotIndex = start;
    // Loop el array de inicio a fin
    for (let i = start + 1; i <= end; i++) {
        // si el elemento actual es mayor al pivote
        // incrementa el indice del pivote en 1
        // despues, intercambia el elemento actual
        // con el elemento en el indice del pivote
        if (pivotElem > arr[i]) {
            pivotIndex++;
            swap(arr, i , pivotIndex);
        }
    }
    //intercambia el elemento inicial con el
    //  elemento con el indice del pivote.
    swap(arr, start, pivotIndex)
    // regresa el inidice del pivote
    return pivotIndex;
}


let arr = [4, 1, 2, 8, 5, 7, 6, 3];

console.log(pivot(arr));

console.log(arr);
