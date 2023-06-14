let arr = [1,2,3,4,5,6,7,8]

let size = arr.length

let m = Math.floor(size/2);

let izq = arr.slice(0,m);
let der = arr.slice(m, size);

console.log(izq, der)

