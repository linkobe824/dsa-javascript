// funcion hash solo para strings
// problemas con esta hash function
// 1.- solo funciona con strings
// 2.- no es tiempo constante ( es O(n))
// 3.- puede que sea poco aleatoria (los resultados pueden apilarse en una seccion)
// function hash(key, arrayLen) {
//     let total = 0;
//     for (let char of key){
//         let value = char.charCodeAt(0) - 96;
//         total = (total + value) % arrayLen;
//     }
//     return total;
// }

// segunda version
// utiliza un limite para las itereaciones
// ya que podria haber strings de miles de caracteres
// utilizar un numero primero ayuda a dispersar las keys de forma
// mas uniforme
// si el tamaño del array es un numero primo, tambien se tienen mucho menos colisones
function hash(key, arrayLen) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}
