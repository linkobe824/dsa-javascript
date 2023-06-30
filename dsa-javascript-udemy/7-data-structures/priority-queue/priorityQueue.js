class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

// implementada como MinBinaryHeap  - menor valor en prioridad es prioridad mas alta
class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        let element = new Node(val, priority);
        this.values.push(element);
        this.bubbleUp();

        return this;
    }

    bubbleUp(){
        // indice del elemento agregado
        let idx = this.values.length - 1
        const element = this.values[idx];

        // loop que compara al padre con el hijo, si el hijo es menor
        // sube la heap
        // el loop corre hasta que el hijo sea mayor al padre
        // o el hijo se convierte en el root.
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2 );
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[idx] = this.values[parentIdx];
            this.values[parentIdx] = element;
            idx = parentIdx; 
        }


    }

    dequeue(){
        // obtener el primer elemento (menor actual)
        const min = this.values[0];
        // obtener el ultimo elemento y eliminarlo 
        const end = this.values.pop();
        // si despues de eliminar el ultimo elemento, aun hay elementos en la heap
        // hacer del ultimo elemento, el primero elemento y
        // encontrar su lugar correcto en la heap
        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown(){
        //indice del primer elemento (el nuevo root - posible lugar incorrecto)
        let idx = 0;
        //constante del primer elemento
        const element = this.values[0];
        // constante de la longitud
        const length = this.values.length;

        //loop para hundir el elemento, si es mayor a los hijos, 
        // el elemento se hara hijo del elemento mas chico entre los dos
        while(true) {
            // indice de los hijos
            let leftChildIdx = idx * 2 + 1;
            let rightChildIdx = idx * 2 + 2;
            let leftChild, rightChild;
            // variable para saber si hubo intercambio con los hijos
            // y guardar el indice del hijo a intercambiar
            let swap = null;

            //validar los indices
            //obtener el indice del hijo a cambiar si es posible.
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(element.priority > leftChild.priority){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && element.priority > rightChild.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)){
                        swap = rightChildIdx;
                    }
            }

            // si no hubo intercambio salir del ciclo, el elemento ya esta en el lugar correcto
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

}

let pq = new PriorityQueue();

pq.enqueue('world', 2 );
pq.enqueue('!', 3)
pq.enqueue('hello', 1)
pq.enqueue('kobe', 0)
console.log(pq);
console.log(pq.dequeue());
console.log(pq)
console.log(pq.dequeue());
console.log(pq)
console.log(pq.dequeue());
console.log(pq)