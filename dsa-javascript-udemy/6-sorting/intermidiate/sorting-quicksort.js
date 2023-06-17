function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let pivotIndex = start;
    for(let i = start + 1; i <= end; i++){
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

// En esta implementacion de quicksort no se crea un nuevo array, sino que
// se trabaja con subarray (seccion del mismo array) por lo tanto se utilizan punteros
// izquierdo y derecho
// funcion que acepte el array, puntero izquiero (inicio seccion) y derecho (fin seccion)
function quickSort(arr, left = 0, right = arr.length - 1) {
    // caso base - el puntero izquierdo supera al derecho
    if(left > right) { 
        return arr;
    }
    //aplicar pivot en la seccion del array y obtener el indice del pivote
    let pivotIndex = pivot(arr, left, right)
    //izquierda del pivote
    //aplicar quicksort a la izquierda del pivote
    quickSort(arr, left, pivotIndex - 1);
    //derecha del pivote
    //aplicar quicksort a la derecha del pivote
    quickSort(arr, pivotIndex + 1, right);
}

let arr = [4, 1, 2, 8, 5, 7, 6, 3];
quickSort(arr);
console.log(arr);