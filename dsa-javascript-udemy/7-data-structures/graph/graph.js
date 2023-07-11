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

    // dfsRecursive(vertex){
    //     let res = []
    //     let visited = {}
    //     const dfs = (vertex) => {
    //         if(!vertex){
    //             return
    //         }
    //         visited[vertex] = true;
    //         res.push(vertex);
    //         let list = this.adjacencyList[vertex];
    //         for(let i = 0; i < list.length; i++){
    //          if(!visited[list[i]]){
    //           dfs(list[i]);
    //          }
    //         }
    //     }
    //     dfs(vertex);
    //     return res;
    // }

    dfTraversalRecursive(vertex){
        const result = [];
        const visited = {};
        // se necesita crear una variable con la lista
        // ya que "this" no existe en el contexto
        // de (function dfs())();
        const adjacencyList = this.adjacencyList;
   
        (function dfs(vertex){
         if(!vertex) return null;
         visited[vertex] = true;
         result.push(vertex);
         adjacencyList[vertex].forEach(neighbor => {
          if(!visited[neighbor]){
           return dfs(neighbor)
          }
         })
        })(vertex);
   
        return result;
        
    }

    dfTraversalIterative(vertex) {
        const vertexToVisit = []; // stack
        const res = [];
        const visited = {};
        let current;

        vertexToVisit.push(vertex);
        visited[vertex] = true
        
        while(vertexToVisit.length){
            current = vertexToVisit.pop();
            res.push(current);

            this.adjacencyList[current].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    vertexToVisit.push(neighbor);
                }
            })

        }

        return res;
    }

    bfTraversal(vertex){
        const vertexToVisit = []; //queue
        const visited = {};
        const res = [];
        let current;

        vertexToVisit.push(vertex);
        visited[vertex] = true;

        while(vertexToVisit.length){
            current = vertexToVisit.shift();
            res.push(current);

            this.adjacencyList[current].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    vertexToVisit.push(neighbor);
                }
            })
        }

        return res;

    }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B");
g.addEdge("A","E");
g.addEdge("B","C");
g.addEdge("B","D");
g.addEdge("E","D");
g.addEdge("E","F");
g.addEdge("F","D");


console.log(g.bfTraversal("A"));