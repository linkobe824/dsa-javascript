function addUpTo(n)
{
    let total = 0
    for(let i =  1 ; i <= n; i++)
    {
        total += i; // O(n)
    }
    return total
}

console.log(addUpTo(3))