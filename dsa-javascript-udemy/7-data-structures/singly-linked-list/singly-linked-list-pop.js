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

    //recorrer la linked list
    // traverse(){
    //     let current = this.head;
    //     while(current){
    //         current = current.next;
    //     }
    // }

    //metodo para remover el ultimo elemento  de la lista
    pop(){
        //si no hay nodo en la lista, regresa undefined
        if(!this.head){
            return undefined;
        }
        //loop la lista hasta que llegues al tail
        let current = this.head;
        let prev = current;
        while(current.next){
            prev = current;
            current = current.next
        }
        //estabelce al penultimo elemento como tail
        //establece a next del penultimo elemento como null
        this.tail = prev;
        this.tail.next = null;
        //decrementa la longitud en 1
        this.length--;
        //si ya no hay valores, haz tail y head null
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        // retorna el valor del nodo removido
        return current.val;
    }
}

let ll = new SinglyLinkedList()

ll.push(3);
ll.push(4);
ll.push("hello");
console.log(ll.pop())
