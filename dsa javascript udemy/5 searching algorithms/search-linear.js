// funcion que acepte un array y un valor
function linearSearch(arr, n) {
    //recorre el array y verifica si el valor actual es el valor buscado
    for (let i = 0; i < arr.length; i++){
        //si es verdad regresa el indice del elemento
        if (arr[i] === n) return i;
    }
    //si no se encuentra, regresa -1
    return -1;
}

console.log(linearSearch([45,6,32,21,84,6,5,2,1,1,5,15,6,5,8],8))