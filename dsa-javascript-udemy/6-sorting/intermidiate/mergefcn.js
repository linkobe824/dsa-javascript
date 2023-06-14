
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

console.log(merge([1,22,35,88],[2,14,55,99,100]));
