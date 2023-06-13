//guarda el primer elemento como el mas chico hasta el momento
//compara el item con el siguiente item en el array hasta que encuentres uno menor
//si se encuentra un numero mas chicho, designa el numero mas chico como el nuevo minimo
// y continua hasta el final del array
// si el minimo no es el valor (indice) con el que iniciaste, intercambialos
// repite el proceso hasta que el array este ordenado

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++){
        let minimum = i;
        for (j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minimum]){
                minimum = j;
            }
        }
        if (i !== minimum) {
            swap(arr, i, minimum)
        }
    }
    return arr;
}


const swap = (arr, idx1, idx2) => {
    [arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]];
}

console.log(selectionSort([7,6,3,8,16,10,21,11]))