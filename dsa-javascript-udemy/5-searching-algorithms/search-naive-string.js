//crear funcion que tome dos strings
function searchString(s1,s2) {
    let count = 0;

    let l = 0;
    while(l < s1.length){
        l2 = 0;
        while(l2 < s2.length){
            if(s1[l] === s2[l2]){
                l++;
                l2++;
            }else{
                l++;
                break
            }
        }
        if(l2 === s2.length) count++;
    }

    return count;
}

console.log(searchString("wozomgwomg", "omg"))

//recorre el string mas largo s1
//recorre el string mas corto s2
//si el caracter no es igual, sal del ciclo interior
//si el caracter es igual, continua el ciclo interior
//si completas el ciclo interior y encuentras que son iguales, incrementa el conteo
//retorn el conteo