/**
 * Escriba una funcion llamada "same" que acepte dos arrays
 * la funcion debe retornar true si cada valor en el array tiene 
 * el valor al cuadrado correspondiente en el segundo array.
 * La frecuencia de valores debe ser igual.
 * 
 * [1,2,3], [4,1,9] -> true
 * [1,2,3], [1,9] -> false
 * [1,2,1], [4,4,1] -> falso, debe ser la misma frecuencia
 */

// O(n^2)
// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if (correctIndex === -1) {
//             return false;
//         }
//         arr2.splice(correctIndex, 1);
//     }
//     return true;
// }

// O(n)
function same(arr1, arr2){
    // verificar que el arr2 sea de almenos el tamaño de arr1
    if (arr2.length < arr1.length) {
        return false;
    }
    //crear objetos para key:freq de ambos arrays
    let obj1 = {};
    let obj2 = {};
    // poblar los objetos
    for (num of arr1) {
        if (obj1[num]) {
            obj1[num]++;
        }
        else {
            obj1[num] = 1;
        }
    }
    for (num of arr2) {
        if (obj2[num]) {
            obj2[num]++;
        }
        else {
            obj2[num] = 1;
        }
    }
    // verificar obj2[obj[x] * obj[x]] == obj1[x]
    for (num of arr1) {
        let squared = num ** 2;
        if (obj2[squared] > 0) {
            if (obj2[squared] != obj1[num]){
                return false;
            }
        }else{
            return false
        }
    }

    return true 

}

console.log(same([1,2,1], [3,4,1,1]))