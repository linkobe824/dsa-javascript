// function charCount(str)
// {
//     let res  = {};
//     for(let i = 0; i < str.length; i++)
//     {
//         let char = str[i].toLowerCase();
//         if(/[a-z0-9]/.test(char))
//         {
//             if(res[char])
//             {
//                 res[char]++;
//             }
//             else
//             {
//                 res[char] = 1;
//             }
//         }
//     }
//     return res;
// }

function charCount(str)
{
    const res  = {};
    for (let char of str){
        if(isAlphaNumeric(char)){
            char = char.toLowerCase();
            if (res[char]){
                res[char]++
            }else{
                res[char] = 1
            }
        }
    }
    return res;
}

function isAlphaNumeric(char){
    let code = char.charCodeAt();
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper (A-Z)
        !(code > 96 && code < 123)) { // lower (a - z)
            return false;
        }
    return true;
}


console.log(charCount("hello Hi!!"));