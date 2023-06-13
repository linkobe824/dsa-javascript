 /**
    Implement a function calle, areThereDuplicates which accepts a variable number
    of arguments, and checks wheter there are any duplicates among the arguments
    passsed in. You can solve this using the frequency counter pattern or multiple
    pointer patter.
    areThereDuplicates(1, 2, 3); // false
    areThereDuplicates(1, 2, 2); // true
    areThereDuplicates('a', 'b', 'c', 'a'); // true

  */

// frequency counter
function areThereDuplicates(...args) {
    if(args.length === 0) return null;
    // crear y verificar objeto
    let hashmap = {}
    for (item of args) { 
        if (hashmap[item] > 0){
            return true;
        }else{
            hashmap[item] = 1;
        }
    }
    return false;
}

console.log(areThereDuplicates(1))


