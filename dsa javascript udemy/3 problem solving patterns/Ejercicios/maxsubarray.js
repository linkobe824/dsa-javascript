// Escriba una función llamada maxSubArraySum que acepte un arreglo de enteros y un número llamado n.
// La función debe calcular la suma máximo consecutiva de n elementos en el arreglo.

// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
// maxSubarraySum([4, 2, 1, 6], 1); // 6
// maxSubarraySum([], 4); // null

function maxSubArraySum(arr, n) {
    if(arr.length < n) return null;
    //Obetener la suma de la primera seccion
    let maxSum = arr.slice(0,n).reduce((sum,cur) => sum + cur, 0);
    let newValue = maxSum;
    
    // algoritmo sliding window
    for (let i = n; i < arr.length; i++) {
        newValue = newValue - arr[i - n] + arr[i];
        if(maxSum < newValue) {
            maxSum = newValue
        }
    }
    return maxSum;
}

console.log(maxSubArraySum([4, 2, 1, 6], 1))

