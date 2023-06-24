class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    // iterativo 
    insert(val) {
        let newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(current.val === val) return undefined;
            if(val > current.val){
                if(!current.right){
                    current.right = newNode;
                    return this;
                }
                else {
                    current = current.right;
                }
            }
            else {
                if(!current.left){
                    current.left = newNode;
                    return this;
                }
                else {
                    current = current.left;
                }
            }
        }
    }

    // // recursivo
    // insert(val){
    //     let newNode = new Node(val);

    //     if(!this.root) this.root = newNode;
    //     else {
    //         insertNode(this.root)
    //     }

    //     function insertNode(node) {
    //         if(val < node.val){
    //             if(!node.left){
    //                 node.left = newNode;
    //             }
    //             else {
    //                 insertNode(node.left);
    //             }
    //         }
    //         else {
    //             if(!node.right){
    //                 node.right = newNode;
    //             }
    //             else {
    //                 insertNode(node.right)
    //             }
    //         }  
    //     }

    //     return this;

    // }

}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(15);
console.log(bst.insert(8));




