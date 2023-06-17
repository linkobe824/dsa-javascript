function merge(arr1, arr2) {
    let res = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++;
        }
        else {
            res.push(arr2[j]);
            j++;
        }
    }

    //puedes usar while loop 
    if (i < arr1.length){
        res = res.concat(arr1.slice(i))
    } 
    else if (j < arr2.length){
        res = res.concat(arr2.slice(j))
    }

    return res;
}

function mergeSort(arr){
    // caso base, cuando el array es de tamaño 0 o 1, es un array ordenado
    if(arr.length <= 1){
        return arr;
    }
    else {
        //se obtienen las mitades del array, se les aplica recursivamente 
        // mergeSort para seguir dividiendolas hasta que sean de 0 o 1,
        // los arrays devueltos debido al caso base seran mezclados utilizando 
        // la funcion auxiliar merge()
        let size = arr.length;
        let m = Math.floor(size/2);
        let izq = mergeSort(arr.slice(0, m));
        let der = mergeSort(arr.slice(m, size));
        return merge(izq, der);
    }
}





console.log(mergeSort([53,543,3,63,76,8,354,765,8,54,76,65,78,16,54,91]))