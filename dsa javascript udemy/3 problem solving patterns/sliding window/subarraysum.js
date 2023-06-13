/**
 * Implementa una funcion llamada maxSubarraySum que tome un array
 * de numeros entereros y un numero entero n. La funcion debe calcular
 * la suma maxima de n numeros consecutivos en el array.
 */

// O(N)
// function maxSubarraySum(arr, n) {
//     // revisar tamaño del array
//     if(n > arr.length) return null;
//     //puntero izquierdo
//     let l = 0;
//     // obtener la primera seccion del array y crear una variable newValue = max
//     let max = arr.slice(0,n).reduce((sum, cur) => sum + cur, 0);
//     let newValue = max
//     //sliding window obteniendo el nuevo valor restando el elmento l anterior
//     // y sumando el elemento r nuevo
//     for (let r = n; r < arr.length; r++){
//         // mueve l en uno
//         l++;
//         // calcula nueValue  = newValue - arr[l - 1] + arr[r]
//         newValue = newValue - arr[l-1] + arr[r]
//         // comparar con max para saber quien es el maximo
//         if (max < newValue) {
//             max = newValue;
//         }
//     }
//     return max;

    
// }

function maxSubarraySum(arr, n) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < n) return null;

    maxSum = arr.slice(0, n).reduce((sum, cur) => sum + cur, 0);
    tempSum = maxSum;

    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        if (maxSum < tempSum) {
            maxSum = tempSum;
        }
    }
    return maxSum;
}
console.log(maxSubarraySum([1,2,5], 2))