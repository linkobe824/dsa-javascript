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
}

let dll = new DoublyLinkedList();
dll.push(1);
dll.push(4);
dll.push(8);

