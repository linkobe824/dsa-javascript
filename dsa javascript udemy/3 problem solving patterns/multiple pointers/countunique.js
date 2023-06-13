/**
 * Implementa una funcion llamada countUniqueValues. que tome un array ordenado
 * y cuente los valores unicos en el array. puede haber valores negativos
 * pero siempre estara ordenado.
 */

// O(N)
// function countUniqueValues(arr) {
//     // revisar tamaño de arr
//     if (arr.length < 1) {
//         return 0;
//     }else if (arr.length == 1){
//         return 1
//     }
//     // variable contador
//     let unique = []


//     for (let i = 0; i < arr.length; i++) {
//         if (!unique){
//             unique.push(arr[i])
//             continue;
//         }
//         if (arr[i] !== unique[unique.length - 1]){
//             unique.push(arr[i])
//         }

//     }
//     return unique.length
// }


// Utilizando 2 punteros
function countUniqueValues(arr) {
    if (arr.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < arr.length; j++){
        if (arr[i] != arr[j]) {
            i++;
            arr[i] == arr[j]
        }
    }
    return i + 1;
}


console.log(countUniqueValues([1,1,1,2,2,3,4,5,5,5,6,7]))