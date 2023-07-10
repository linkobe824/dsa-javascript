class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex])  this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    // removeEdge(vertex1, vertex2){
    //     this.adjacencyList[vertex1].splice(vertex2, 1)
    //     this.adjacencyList[vertex2].splice(vertex1, 1)
    // }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
                                            .filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
                                            .filter(v => v !== vertex1);
    }
}

let g = new Graph()
g.addVertex('tokyo')
g.addVertex('dallas')
g.addVertex('culiacan')

g.addEdge('tokyo','culiacan')
g.addEdge('tokyo','dallas')
g.addEdge('dallas','culiacan')
