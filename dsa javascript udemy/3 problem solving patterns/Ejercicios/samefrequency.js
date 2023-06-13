/**
 * Frequency Counter - sameFrequency
 Write a function called sameFrequency. Given two positive integers,
 find out if the two numbers have the same frequency of digits.

 sameFrequency(112, 211) // true
 sameFrequency(109344, 410439) // true
 sameFrequency(109344, 41043) // false
 sameFrequency(112, 122) // false
 */

 function sameFrequency(num1, num2) {
    //pasar num1 y num2 a string
    let numStr1 = num1.toString();
    let numStr2 = num2.toString();
    //comparar longitud de strings
    if (numStr1.length !== numStr2.length) return false;
    //crear y poblar objeto
    let hashStr1 = {};
    for (s of numStr1) {
        if (hashStr1[s]){
            hashStr1[s]++;
        } else {
            hashStr1[s] = 1;
        }
    }
    //loop numStr2, si obj[numStr2[i]] == 0 -> return false, else obj[numsStr2[i]]-- 
    for (s of numStr2) {
        if (hashStr1[s] == 0){
            return false
        } else {
            hashStr1[s]--;
        }
    }
    return true
 }

 console.log(sameFrequency(112, 122))

 