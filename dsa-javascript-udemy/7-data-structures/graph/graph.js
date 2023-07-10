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

    removeVertex(vertex){
        let list = this.adjacencyList[vertex];
        for(let i = 0; i < list.length; i++){
            let vertex2 =  list.pop();
            this.removeEdge(vertex, vertex2);
        }
        delete this.adjacencyList[vertex];
    }
}

let g = new Graph()
g.addVertex("dallas")
g.addVertex("tokyo")
g.addVertex("aspen")
g.addVertex("los angeles")
g.addVertex("hong kong")
g.addEdge("dallas","tokyo")
g.addEdge("dallas", "aspen")
g.addEdge("hong kong", "tokyo")
g.addEdge("hong kong", "dallas")
g.addEdge("los angeles", 'hong kong')
g.addEdge('los angeles', 'aspen')
