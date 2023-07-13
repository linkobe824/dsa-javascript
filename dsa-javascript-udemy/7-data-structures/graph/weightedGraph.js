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
            smallest = nodes.dequeue().val;
            if(smallest === end){
                // build path to return
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest]
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    // encontrar el nodo vecino
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
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverese();
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    }

    dequeue(){
        return this.values.shift();
    }

    sort(){
        this.values.sort((a,b) => a.priority - b.priority);
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