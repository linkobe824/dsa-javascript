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

    //metodo para remover el primer elemento de la lista
    shift(){
        if(!this.head) return undefined;
        let oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return oldHead.val;
    }

    //metodo para añadir un nodo al inicio de la lista
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else {
        newNode.next = this.head
        this.head = newNode
        }
        this.length++;

        return this;

    }
    //metodo para recuperar nodo en un indice especifico
    get(idx){
        if(idx < 0 || idx >= this.length) return null;
        let count = 0
        let current = this.head

        while(count < idx){
            current = current.next
            count++
        }

        return current;
    }

    //metodo para cambiar el valor de un nodo en cierto indice
    set(idx, val){
        // utiliza la funcion get para encontrar el nodo
        let node = this.get(idx);
        //si el nodo es encontrado, cambia el valor y retorna true
        if(node){
            node.val = val;
            return true;
        }
        return false;
    }
}