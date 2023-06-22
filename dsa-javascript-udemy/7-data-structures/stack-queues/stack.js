class Node {
    constructor(val){
        this.val = val;
        this.next = null
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //a diferencia de push en una linked list,
    // en un stack se utiliza la implementacion de shift (primer elemento)
    // ya que añadiremos el nodo al inicio debido a que esto
    // es en tiempo constante, mientras que en la linked list
    // era O(n) ya que se tenia que recorrer toda la lista (ultimo elemento).
    push(val){
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            let oldFirst = this.first;
            this.first = newNode;
            this.first.next = oldFirst;
        }

        return ++this.size;
    }

    // metodo para remover el primer elemento (O(1))
    // shift() de linked list.
    pop(){
        if(!this.first) return null;
        let poppedNode = this.first;
        if(this.size === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return poppedNode.val;
    }
}