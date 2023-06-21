class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    print(){
        let list = [];
        let cur = this.head;
        while(cur){
            list.push(cur.val);
            cur = cur.next;
        }
        console.log(list);
    }

    push(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    pop(){
        //verifica que haya elementos
        if(!this.head){
            return undefined;
        }
        // guarda el elemento a remover (tail)
        let popped = this.tail;
        //si la longitu es 1 haz tail y head = null
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        //si no, quita la conexion entre el ultimo nodo
        // y el anteror, haz el nodo anterior la tail
        else {
            this.tail = popped.prev;
            popped.prev = null;
            this.tail.next = null;
        }
        // decrementa la longitud
        this.length--;
        //retorna el elemento eliminado
        return popped;
    }
}
let dll = new DoublyLinkedList();
dll.push(1);
dll.push(4);
dll.push(8);
dll.print();
console.log(dll.pop());
dll.print();