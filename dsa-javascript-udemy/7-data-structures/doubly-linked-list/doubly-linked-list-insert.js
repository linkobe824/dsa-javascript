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
        if(!this.head){
            return undefined;
        }

        let oldTail = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = oldTail.prev;
            oldTail.prev = null;
            this.tail.next = null;
        }

        this.length--;
        return oldTail;
    }

    shift(){
        if(!this.head){
            return undefined;
        }

        let oldHead = this.head
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = oldHead.next;
            oldHead.next = null;
            this.head.prev = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val){
        let node = new Node(val);
        if(this.length===0){
            this.head = node;
            this.tail = node;
        }
   
        this.head.prev = node;
        node.next = this.head;
        this.head = node;

        this.length++;
        return this;
    }

    get(idx){
        // verificar que idx es valido
        if(idx < 0 || idx >= this.length ) return null;
        let count, cur;
        // obtener el tamaño de la mitad de la lista
        let mid = this.length/2;
        //si idx es menor o igual a la mitad, inicia del head
        if(idx <= mid){
            count = 0;
            cur = this.head;
            while(count < idx){
                cur = cur.next;
                count++
            }
        }
        else {
            // si idx es mayor a la mitad, inicia del tail
            count = this.length - 1;
            cur = this.tail;
            while(count > idx){
                cur = cur.prev;
                count--;
            }
        }
        return cur;
    }

    set(idx,val){
        let replacedNodeValue = this.get(idx);
        if(replacedNodeValue != null){
            replacedNodeValue.val = val;
            return true
        }
        return false;
    }

    insert(idx,val){
        if(idx < 0 || idx > this.length) return false;
        if(idx === 0) return !!this.unshift(val);
        if(idx === this.length) return !!this.push(val);

        let newNode =  new Node(val);
        let nextNode = this.get(idx);
        let prevNode = nextNode.prev;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        nextNode.prev = newNode;
        newNode.next = nextNode;
        
        this.length++;

        return true;
    }
}

let dll = new DoublyLinkedList();
dll.push(1);
dll.push(4);
dll.push(8);
dll.print();
dll.insert(2, "new");
console.log(dll)
dll.print();