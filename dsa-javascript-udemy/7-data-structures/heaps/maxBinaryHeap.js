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
}

let mbh = new MaxBinaryHeap();

mbh.insert(10);
mbh.insert(20);
mbh.insert(33);
mbh.insert(8);
mbh.insert(25);
mbh.insert(65);
mbh.insert(10);
mbh.insert(90);
console.log(mbh.insert(66));