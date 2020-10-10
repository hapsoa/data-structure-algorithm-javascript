class GraphNode {
  constructor(private data: number, private links: GraphNode[]) {}
}

class Graph {
  constructor(private nodes: GraphNode[]) {}

  public getAdjacencyList() {
    // TODO
  }
}

const graph = new Graph([]);
