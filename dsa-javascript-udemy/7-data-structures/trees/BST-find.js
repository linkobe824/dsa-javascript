class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
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

    contains(val) {
        if(!this.root) return false;
        let current = this.root;
        let found = false;

        while(current && !found) {
            if(val < current.val){
                current = current.left;
            }
            else if (val > current.val){
                current = current.right;
            }
            else {
                return true;
            }
        }
        return false;
    }

    find(val) {
        if(!this.root) return undefined;
        let current = this.root;
        let found = false;

        while(current && !found) {
            if(val < current.val){
                current = current.left;
            }
            else if (val > current.val){
                current = current.right;
            }
            else {
                found = true;
            }
        }
        
        if(!found) return undefined
        return current;
    }

}

let tree = new BinarySearchTree;

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(20);
tree.insert(6);

console.log(tree.contains(15))
console.log(tree.find(15))