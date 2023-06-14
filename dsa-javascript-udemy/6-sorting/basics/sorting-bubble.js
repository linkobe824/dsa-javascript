function bubbleSort(arr) {
// inicia loopeando con i = el final del array hasta el inicio
// de esta forma se hacen menos pasadas al array y podemos usar i como limite para j
    for (let i = arr.length; i > 0; i--){
        // loop interno desde 0 hasta i - 1
        for (let j = 0; j < i - 1; j++){
            //si a[j] > a[j +1], intercambialos
            if(arr[j] > arr[j + 1]){
                swap(arr, j, j + 1)
            }
        }
    }
    return arr;

}

//ES5
// function swap(arr, idx1, idx2) {
//     let temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temp;
// }

//ES2015
const swap = (arr, idx1, idx2) => {
    [arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]];
}

console.log(bubbleSort([2,6,3,8,16,10,21,11]))