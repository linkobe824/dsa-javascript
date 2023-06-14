function merge(arr1, arr2) {
    // crea un array para mezclar ambos arrays ordenados
    // y los punteros para los arrays
    let res = [];
    let i = 0;
    let j = 0;
    // mientras aun queden valores que ver
    while (i < arr1.length && j < arr2.length) {
        // si el valor del primer array es menor qe el del segundo
        // push el valor del primer array a res y muevelo al
        // siguiente elemento
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++;
        }
        // si el valor del segundo array es menor qe el del primero
        // push el valor del segundo array a res y muevelo al
        // siguiente elemento
        else {
            res.push(arr2[j]);
            j++;
        }
    }

    // ya que acabaste con todos los valores de un array
    // push todos los valores del otro array a res
    // if (i < arr1.length){
    //     res = res.concat(arr1.slice(i))
    // } 
    // else if (j < arr2.length){
    //     res = res.concat(arr2.slice(j))
    // }
    while(i < arr1.length){
        res.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        res.push(arr2[j]);
        j++;
    }
    return res;
}

function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    else {
        let size = arr.length;
        let m = Math.floor(size/2);
        let izq = arr.slice(0, m);
        let der = arr.slice(m, size);
        return merge(mergeSort(izq), mergeSort(der));
    }
}





console.log(mergeSort([53,543,3,63,76,8,354,765,8,54,76,65,78,16,54,91]))