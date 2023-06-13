/**
    write a function called averagePair, given a sorted array of integers and a target average, determine if there is a 
    pair of value in the array where the average of the pair is equal to the target average.  There may be more than one pair
    that matches the target average.

    Sample Input:
    averagePair([1,2,3],2.5) //true
    averagePair([1,3,3,5,6,7,10,12,19],8)  //true
    averagePair([1,0,3,4,5,6],4.1)  //false
    averagePair([], 4)  //false
 */

    function averagePair(arr, n) {
        //verificar tamaño del array
        if (arr.length == 0) return false;
        //crear punteros
        let l = 0;
        let r = arr.length - 1;
        //ciclo while con punteros en los extremos
        while (l < r){
            let avg = (arr[l] + arr[r])/2;
            //si (arr[l] + arr[r])/2 == n return true
            if (avg === n) {
                return true;
            }
            //si es menor l++
            else if (avg < n) {
                l++;
            }
            //si es mayor r--
            else {
                r--;
            }
        }
        return false;
    }

    console.log(averagePair([1,0,3,4,5,6],4.1))