/**
    Write a function called isSubsequence which takes in two strings and checks whethe
    the characters in the first string form a subsequence of the characters in the second 
    string. In other words, the function should check whether the characters in the first
    string appear somewhere in the second string, without their order changing. 

    isSubsequence('hello', 'hello world') //true
    isSubsequence('sing', 'string'); //true
    isSubsequence('abc', 'acb') //false (order matters)
*/

// // usando stack O(n)
// function isSubsequence(s1, s2) {
//     // cambiar s1 a array
//     let stackS1 = s1.split("").
    
//     for (let i = s2.length - 1; i >= 0; i--){
//         if(s2[i] == stackS1[stackS1.length - 1]) {
//             stackS1.pop();
//         }
//     }
//     if(stackS1.length == 0) {
//         return true
//     }
//     return false
// }

// O(n)
// Usando dos punteros
function isSubsequence(s1,s2) {
    //iniciar punteros
    let i = 0;
    let j = 0;

    //algoritmo
    while (j < s2.length) {
        // si la letra es igual, i y j avanzan, sino solo j avanza
        if (s1[i] == s2[j]) i++;
        //si i es del tamaño de s1 entonces regresa true
        if(i == s1.length) return true;
        j++;
    }
    return false;
}

//recursivo O(n)
function isSubsequence(s1,s2) {
    //caso base
    // si no quedan elementos en s1 quiere decir que todos estaban en orden en s2
    if(s1.length == 0) return true
    //si no quedan elementos en s2 antes que en s1 entonces, los elementos de s1 no estaban en s2 en orden
    if(s2.length == 0) return false
    // caso recursivo
    //si el elemento 0 de ambos strings es igual
    // se llama recursivamente a la funcion con los strings mas chicos ["hello"] -> ["ello"]
    if(s2[0] === s1[0]) return isSubsequence(s1.slice[1], s2.slice[1])
    // si no, se llama recursivamente  a la funcion, pasando s1 y s2 mas chico
    return isSubsequence(s1, s2.slice[1])
 }


console.log(isSubsequence('hello', 'hello world'))

