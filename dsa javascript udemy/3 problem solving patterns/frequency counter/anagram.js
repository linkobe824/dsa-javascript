/**
 * Dados dos strings, escriba una funcion que determina si el segundo string
 * es un anagrama del primero. Un anagrama es u a palabra, frase o nombre formado 
 * reordenando las letras, tacl como cinema -> iceman
 */

// O(n)
// function validAnagram(str1, str2){
//     //verificar si son de la misma longitud los strings
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     //crear dos objetos para comparar
//     obj1 = {};
//     obj2 = {};
//     // poblar los objetos
//     for (s of str1) {
//         if (obj1[s]) {
//             obj1[s]++;
//         }
//         else {
//             obj1[s] = 1;
//         }
//     }

//     for (s of str2) {
//         if (obj2[s]) {
//             obj2[s]++;
//         }
//         else {
//             obj2[s] = 1;
//         }
//     }
//     // comparar los objetos
//     for (s of str1) {
//         if (obj2[s] > 0) {
//             if (obj1[s] !== obj2[s]) {
//                 return false;
//             }
//         }
//         else {
//             return false;
//         }
//     }
//     return true;
// }

console.log(validAnagram('true','grue'));

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const lookup = {};

    // poblar el objeto
    for (s of str1) {
        lookup[s] ? lookup[s]++ : lookup[s] = 1;
    }
    // verificar que las letras de str2 esten la misma cantidad de veces en str1
    // revisa la letra de str2 en el objeto, si esta, le resta una, si en dado caso
    // no esta o ya no esta, quiere decir que esa letra esta faltante en el objeto
    for (s of str2) {
        if (!lookup[s]) {
            return false;
        } else {
            lookup[s]--;
        }
    }
    return true;
} 