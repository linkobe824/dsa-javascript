// funcion que acepte 3 argumentos: array, indice_inicio, indice_fin 
function pivot(arr, start = 0, end = arr.length - 1 ) {
    // Elige el pivote como el primer elemento del array
    let pivot = arr[start];
    // guarda el inidice actual del pivote
    let pivotIndex = start;
    
    // recorre el array y si el elemento actual es menor que el pivote
    // incrementa el indice del pivote e intercambia el elemento acutal 
    // con el del indice del pivote
    for(let i = start + 1; i <= end; i++){
        if(pivot > arr[i]){
            pivotIndex++;
            swap(arr, i, pivotIndex);
        }
    }

    //intercambia el valor inicial (pivote) con el valor en el indice del pivote
    swap(arr, start, pivotIndex);
    //retorna el indice del pivote
    return pivotIndex;
}

function swap(arr, i , j){
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

let arr = [4, 1, 2, 8, 5, 7, 6, 3];
console.log(pivot(arr));
console.log(arr)
