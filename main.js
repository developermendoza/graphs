class Graph {
  constructor() {
    this.vertices = new Map(); // Map to store vertices and their adjacent vertices
  }

  addVertex(vertex) {
    if (!this.vertices.has(vertex)) {
      this.vertices.set(vertex, []); // Initialize an empty array for adjacent vertices
    }
  }

  //method to add an edge between two vertices in the graph
  addEdge(vertex1, vertex2) {
    if (!this.vertices.has(vertex1) || !this.vertices.has(vertex2)) {
      console.log("Both vertices must exist in the graph");
      return;
    }

    //for an undirected graph, add edges in both directions
    this.vertices.get(vertex1).push(vertex2);
    this.vertices.get(vertex2).push(vertex1);
  }
  print() {
    for (const [vertex, edges] of this.vertices) {
      console.log(`${vertex} -> ${edges.join(", ")}`);
    }
  }
}

const myGraph = new Graph();

myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");

myGraph.addEdge("A", "B");
myGraph.addEdge("B", "C");
myGraph.addEdge("C", "D");
myGraph.addEdge("D", "A");

myGraph.print();
