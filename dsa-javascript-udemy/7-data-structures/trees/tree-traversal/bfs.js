class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        let cur = this.root;
        while(true){
            if(newNode.val < cur.val){
                if(!cur.left){
                    cur.left = newNode;
                    return this;
                }else{
                    cur = cur.left;
                }
            }
            else {
                if(!cur.right){
                    cur.right = newNode;
                    return this;
                }else {
                    cur = cur.right;
                }
            }
        }
    }

    //metodos de recorrido
    // breadth-first search (iterativo)
    bfs(){
        //crea una queue y una variable para guardar el valor
        //de los nodos visitados
        let queue = [];
        let data = [];
        let node = this.root;
        //poner a root en la queue
        queue.push(node);
        //loop la queue mientras haya algo en ella
        while(queue.length > 0) {
            //deque un nodo de la queue y añade el valor del nodo en la variable
            //que guarda los nodos visitados
            node = queue.shift()
            data.push(node.val);
            // si hay nodo a la izquierda, añade el nodo a la queue
            if(node.left) queue.push(node.left);
            // si hay nodo a la derecha, añade el nodo a la queue
            if(node.right) queue.push(node.right);
        }
        //retorna la variable con los nodos guardados
        return data;
    }
}

let bt = new BinarySearchTree();
bt.insert(10);
bt.insert(6);
bt.insert(15);
bt.insert(8);
bt.insert(3);
bt.insert(20);

//        10
//     6     15
//   3   8      20  

console.log(bt.bfs()); //[10, 6, 15, 3 ,8 ,20]