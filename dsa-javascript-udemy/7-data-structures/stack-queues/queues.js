class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // matodo para añador al final de la lista
    enqueue(val){
        let newNode = new Node(val);

        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        this.last.next = newNode;
        this.last = newNode;

        return ++this.size;
    }

    // metodo para remover al inicio de la lista
    dequeue(){
        if(!this.first) return null;
        let dequeuedNode = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;

        return dequeuedNode.val;
    }
}

let q = new Queue;
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q);

console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())