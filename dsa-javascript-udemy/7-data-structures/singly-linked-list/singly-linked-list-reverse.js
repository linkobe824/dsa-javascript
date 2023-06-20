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
        let node = this.get(idx);
        if(node){
            node.val = val;
            return true;
        }
        return false;
    }

    //metodo para insertar un nodo en un indice en especifico
    insert(idx, val){
        if(idx < 0 || idx > this.length) return false;
        if(idx === this.length) return !!this.push(val);
        if( idx === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let prevNode = this.get(idx-1);
        newNode.next = prevNode.next;
        prevNode.next = newNode;

        this.length++;
        return true;
 
    }

    // metodo para remover un nodo de un indice especifico
    remove(idx){
        if(idx < 0 || idx >= this.length) return false;
        if(idx === 0) return this.shift();
        if(idx === this.length - 1) return this.pop();

        let prevNode = this.get(idx-1);
        let removedNode = prevNode.next;
        prevNode.next = removedNode.next

        return removedNode;
    }

    // metodo para invertir la listsa
    reverse(){
        // intercambia head y tail
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        // prev se inicia en null para que el nuevo tail
        // apunte ahi en la primera iteracion
        //sino es undefined
        let next;
        let prev = null;

        //recorre la lista
        // next sera el siguiente elemento del nodo
        // el nodo apuntara a prev
        // el nodo se convertira en prev
        // y next se convertira en nodo
        while(node){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
        
    }

    // metodo para ver la lista
    print(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

}




let ll = new SinglyLinkedList()

ll.push(1);
ll.push(2);
ll.push(3);

console.log(ll.print())
console.log(ll.reverse())
console.log(ll.print())