// funcion que acepte 3 argumentos: array, indice_inicio, indice_fin 
function pivot(arr, start = 0, end = arr.length ) {
    let pivot = arr[start];
    let pivotIndex = start;
    
    for(let i = start + 1; i < end; i++){
        if(pivot > arr[i]){
            pivotIndex++;
            swap(arr, i, pivotIndex);
        }
    }

    swap(arr, start, pivotIndex);
    return pivotIndex;
}

function swap(arr, i , j){
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

let arr = [4, 1, 2, 8, 5, 7, 6, 3];
console.log(pivot(arr));
console.log(arr)
