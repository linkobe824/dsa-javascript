function quicksort(arr) {
    //caso base, tamaño del array
    if(arr.length < 2){
        return arr;
    }
    //haz el elemento inicial pivote
    let pivot = arr[0];
    //crea arrays para almacenar las secciones
    // izquierda y derecha del pivote
    let leftArr = [];
    let rightArr = [];

    // recorre el array, si el pivote es mayor que el elemento actual
    // guarda el elemento en la parte izquierda
    // si no, guarda el elemento en la parte derecha
    for (let i = 1; i < arr.length; i++){
        if (pivot > arr[i]) {
            leftArr.push(arr[i]);
        }
        else {
            rightArr.push(arr[i]);
        }
    }

    //aplica recursivamente quicksort a la parte izquierda
    // y derecha del pivote.
    return [...quicksort(leftArr), pivot, ...quicksort(rightArr)];
}

let arr = [5,6,9,1,2,3,4,8,7]
console.log(quicksort(arr))

