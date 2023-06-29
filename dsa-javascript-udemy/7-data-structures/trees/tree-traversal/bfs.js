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
    // breadth-first search (iterativo) - Recorrido horizontal
    // iniciando con la raiz del arbol en la cola
    // se hace dequeue en la cola
    // se agrega su valor (del nodo dequeued) en una variable para retornarla
    // luego se verifica si tiene hijos y si los tiene se agregan a la cola
    // entonces se repite el proceso hasta que ya no haya nodos en la cola.
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

    //Depth First Search - PreOrder (recurisvo)
    // se inicia con la raiz, y se van agregando los nodos del lado izquierdo
    // antes que los del derecho
    dfs_preOrder(){
        // crea una variable para guardar los nodos visitados
        // y una variable current inicializada en root;
        let data = []
        let current = this.root;

        // crea una helper function que tome como argumento un nodo
        // el valor del nodo se añade a la variable para guardar
        // si hay nodo a la izquierda utilizamos la helper function con ese nodo
        // si hay nodo a la derecha utilizamos la gelper function con ese nodo
        const traverse = (node) => {
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }

        traverse(current);
        //retorna los datos
        return data;

    }

    //Depth Frist Search - PostOrder(recursivo)
    // antes de agregar un nodo (visitarlo) se revisan los nodos izquierdo y derecho
    dfs_postOrder(){
        // crea una variable para almacenar los nodos visitados
        let data = [];
        // guarda la raiz del arbol en una variable llamada current
        let current = this.root;
        // crea una helper function que tome como argumento un nodo
        const traverse = (node) => {
            // si el nodo tiene propiedad izquierda, usa la helper function
            // con la propiedad izquierda
            if(node.left) traverse(node.left);
            // si el nodo tiene propiedad derecha, usa la helper function
            // con la propiedad derecha.
            if(node.right) traverse(node.right);
            // añade el valor del nodo a la variable
            data.push(node.val);
        }

        // invoca a la helper function con current
        traverse(current);
        // retorna la variable con los nodos guardados.
        return data;
    }

    //depth-first search - InOrder
    //explora el lado izq, luego agrega el nodo, y explora el lado derecho (en orden)
    dfs_inOrder(){
        let data = [];
        let current = this.root;

        const traverse = (node) => {
            if(node.left) traverse(node.left);
            
            data.push(node.val);

            if(node.right) traverse(node.right);
        }

        traverse(current);
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

// console.log(bt.bfs()); //[10, 6, 15, 3 ,8 ,20]

//console.log(bt.dfs_preOrder()) // [10 ,6, 3, 8, 15, 20]

// console.log(bt.dfs_postOrder()); //[ 3, 8, 6, 20, 15, 10 ]

// console.log(bt.dfs_inOrder()); //[ 3, 6, 8, 10, 15, 20 ]