/**
 * Escriba una funcion llamada sumZerp qie acepte un array de enteros ordenados
 * La funcion debe encontrar el primer par donde la suma sea 0
 * Retorna un array con ambos valores que hagan al suma = 0 o undefined si el par no existe
 */

// O(n)
function sumZero(arr) {
    // crear punteros izquierdo y derecho en extremos del array
    let l = 0;
    let r = arr.length - 1;
    // ciclo while para acercar punteros
    while (l < r) {
        // variable para la suma arr[l] + arr[r]
        let sum = arr[l] + arr[r];
        // si la suma es 0 retornar [arr[l], arr[r]]
        if (sum === 0) {
            return [arr[l],arr[r]];
        }
        // si la suma de arr[l] + arr[r] es < 0 acercar l
        else if (sum < 0) {
            l++;
        }
        // si suma es > 0 acercar r
        else{
            r--;
        }
    }
}

console.log(sumZero([-4,-2,0,1,3,5]))