let arr = [4, 1, 2, 8, 5, 7, 6, 3];



function swap2(arr){
    for(let i = 0; i < arr.length-1; i++){
        if (arr[i] < arr[i + 1]){
            swap(arr, i, i+1);
        }
    }
    return arr;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(swap2(arr));