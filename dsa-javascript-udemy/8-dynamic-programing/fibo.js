//fibonacci recursivo
function recFibo(n) {
    if(n <= 2) return 1;
    return fibo(n-1) + fibo(n-2)
}

//fibonacci programacion dinamica - Memoization  (top down)
function mFibo(n, memo=[]) {
    // memoization - si la misma entrada ocurre, regresa el resultado
    if(memo[n] !== undefined) return memo[n]
    if(n <= 2) return 1;
    let res = mFibo(n-1, memo) + mFibo(n-2, memo);
    //guardar en array (cache)
    memo[n] = res;
    return res;
}

//fibonacci programacion dinamica - Tabulacion (bottom up)
function tFibo(n) {
    if(n <= 2) return 1;
    let fibNums = [0, 1, 1];
    for(let i = 3; i <= n; i++){
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
}

console.log(tFibo(100))
