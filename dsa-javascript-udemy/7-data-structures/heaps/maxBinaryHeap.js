class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();

        return this;
        
    }

    bubbleUp(){
        // obtenemos el indice el elemento recien añadido (ultimo)
        let idx = this.values.length - 1;
        // definimos a element como el elemento recien agregado
        const element = this.values[idx];
        
        // el ciclo correra mientras el indice sea valido o el elemento sea menor o igual al padre
        while(idx > 0){
            // se calcula el indice del padre y se define parent como el valor en ese indice
            let parentIdx = Math.floor((idx - 1)/ 2)
            let parent = this.values[parentIdx];
            // si element es menor o igual a parent salimos del loop
            if(element <= parent) break;
            //se hace el intercambio de valores entre parent y elemento
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            // el indice se redefine como el indice del padre anterior
            idx =  parentIdx;
        }
    }

    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max
    }

    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            // variable para guardar estado o el indice del hijo a intercambiar
            let swap = null;

            //verificar que el indice del hijo izq sea valido
            if(leftChildIdx < length){
                // si es valido obtenemos su valor en values
                leftChild = this.values[leftChildIdx];
                // verificar si es candidato a intercambio con el padre
                // si es un valor apropiado lo guarda en swap, sino, swap sigue como null
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }
            //verificar que el indice del hijo der sea valido
            if(rightChildIdx < length){
                // si es valido se asigna el valor a la variable
                rightChild = this.values[rightChildIdx];
                //verificar si es candito a intercambio con el padre
                // si el izq no fue candidato y der es mayor que el padre o
                // si izq es candidato pero der es mayor a izq
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
                    swap = rightChildIdx;
                }
            }

            // si no hubo intercambio se sale del ciclo ya que el elemento esta en su lugar apropiado
            if(swap === null) break;
            // realizar intercambio entre el elemento y el hijo
            this.values[idx] = this.values[swap]
            this.values[swap] = element;
            // actualizar el indice del elemento. 
            idx = swap;
        }
    }

}

let mbh = new MaxBinaryHeap();

mbh.insert(41)
mbh.insert(39)
mbh.insert(33)
mbh.insert(18)
mbh.insert(27)
console.log(mbh.insert(12));
mbh.extractMax()
console.log(mbh);
mbh.extractMax()
mbh.extractMax()
mbh.extractMax()
mbh.extractMax()
mbh.extractMax()
mbh.extractMax()
mbh.extractMax()

console.log(mbh);
