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
}

let dll = new DoublyLinkedList();
dll.push(1);
dll.push(4);
dll.push(8);
dll.print();