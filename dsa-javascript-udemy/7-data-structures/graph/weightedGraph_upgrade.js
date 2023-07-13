class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1,vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2, weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }

    dijkstra(start, end){
        const distances = {};
        const nodes = new PriorityQueue();
        const previous = {};
        let path = [];

        // construir el estado inicial de las estructuras
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex,0)
            }
            else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null;
        }

        // mientras haya algo que visitar
        let smallest;
        while(nodes.values.length){
            // smallest es el nodo con distancia mas corta desde el incial 
            // hasta el momento
            smallest = nodes.dequeue().val;
            if(smallest === end){
                // build path to return
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest]
                }
                break;
            }
            // if(smallest || distances[smallest] !== Infinity){
            else{
                // obtener vecinos de smallest (nodo actual)
                for(let neighbor in this.adjacencyList[smallest]){
                    // neighbor es el indice de los elementos dentro de la lista
                    // encontrar el nodo vecino
                    // nextNode entrega {nodo y peso}
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calcular nueva distancia
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node
                    if(candidate < distances[nextNeighbor]){
                        // actualizar nueva distancia mas pequeña a vecino
                        distances[nextNeighbor] = candidate;
                        // actualizar previous - como se llego a vecino
                        previous[nextNeighbor] = smallest;
                        //enqueue con nueva prioridad
                        // al ser una priority Queue lo ordena de acuerdo al peso (Distancia)
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverese();
    }

}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/ 2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ){
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}


let g = new WeightedGraph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B", 4)
g.addEdge("A","C", 2)
g.addEdge("B","E", 3)
g.addEdge("C","D", 2)
g.addEdge("C","F", 4)
g.addEdge("D","F", 1)
g.addEdge("D","E", 3)
g.addEdge("F","E", 1)