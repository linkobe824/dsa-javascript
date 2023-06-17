//cuando se tiene un array que ya esta (casi) ordenado, 
// no es necesario ir pasando constantemente el loop
// podemos crear una variable que nos cheque si hiciemos algun 
// intercambio de valor en la ultima pasada
// si no se hizo, entonces salimos del loop

function bubbleSort(arr) {
            let swapped;
        for (let i = arr.length; i > 0; i--){
            swapped = false;
            for (let j = 0; j < i - 1; j++){
                if(arr[j] > arr[j + 1]){
                    swap(arr, j, j + 1)
                    swapped = true;
                }
            }
            if(!swapped) break;
        }
        return arr;
    
    }
    
    
    //ES2015
    const swap = (arr, idx1, idx2) => {
        [arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    
    console.log(bubbleSort([2,6,3,8,16,10,21,11]))