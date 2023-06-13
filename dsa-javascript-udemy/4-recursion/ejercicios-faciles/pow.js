let  pow = function(x,n) {
    if (n === 0) return 1;
    return x * pow(x,n-1)
}

console.log(pow(2,4))