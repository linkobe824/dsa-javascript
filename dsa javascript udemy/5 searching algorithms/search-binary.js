// funcion que acepta arr ordenado y un valor
function binarySearch(arr, val) {
    //crear puntero izquierdo al inicio del array y derecho al final del array
    let l = 0;
    let r = arr.length - 1;
    //mientras el puntero izquierda este antes del derecho
    while (l <= r){
        //crear un puntero en el medio
        let mid = Math.floor((l + r) / 2)
        //si encuentras el valor que ocupas, regresa el indice
        if (arr[mid] === val){
            return mid;
        }
        //si el valor es muy chico, mueve el puntero izquierda adelante del medio
        else if(arr[mid] < val){
            l = mid + 1;
        }
        //si el valor es muy grande, mueve el puntero derecho atras del medio
        else {
            r = mid - 1;
        }
    }
    //si no esta el valor, regresa -1
    return -1;
}

sorted_array = [2,34,45,56,67,78,79]

console.log(binarySearch(sorted_array, 67))