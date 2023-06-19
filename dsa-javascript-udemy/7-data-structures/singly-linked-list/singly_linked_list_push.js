class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        //crea un nuevo nodo utilizando val
        let newNode = new Node(val);
        //si esta vacio
        //si no hay head, establece a head y tail como el nuevo nodo
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        //si hay, establece al nuevo nodo como a la propiedad next de tail
        // y hace tail el nuevo nodo
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        //incrementa length en 1
        this.length++;
        // retorna la lista
        return this;
    }
}