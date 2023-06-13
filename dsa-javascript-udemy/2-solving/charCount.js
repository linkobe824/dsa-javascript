function charCount(str){
    // crear objeto para regresar al final
    let res = {};
    // loop el string para cada caracter
    for(let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase();
        // si char es numero/letra y es una key del objeto añade 1 al objeto
        if (res[char]){
            res[char]++;
        }
        // si char es numero/letra y no es una key del objeto, añadela al objeto y por el contador a 1
        else{
            res[char] = 1;
        }
        // si el char es otra cosa no hace nada
    }
    // regresar objeto
    return res;
}

console.log(charCount("Hello"));