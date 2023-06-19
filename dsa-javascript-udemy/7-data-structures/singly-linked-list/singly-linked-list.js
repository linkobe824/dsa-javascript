// nodo
// dato -val
// referencia al siguiente nodo - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// head, tail y length
class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //metodo para añadir un nuevo nodo al final de la lista
    push(val) {
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

        //metodo para remover el ultimo elemento  de la lista
        pop(){
            if(!this.head) return undefined;

            let current = this.head;
            let prev = current;
            while(current.next){
                prev = current;
                current = current.next
            }

            this.tail = prev;
            this.tail.next = null;
            
            this.length--;
            if(this.length === 0){
                this.head = null;
                this.tail = null;
            }
            return current.val;
        }
}


