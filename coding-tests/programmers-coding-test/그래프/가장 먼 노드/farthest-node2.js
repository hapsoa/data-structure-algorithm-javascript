/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
class Node {
  constructor(data) {
    this.data = data;
    this.links = [];
    this.depth = null;
  }

  setLink(node) {
    this.links.push(node);
  }
}

class Graph {
  constructor(n, edges) {
    this.nodes = [];
    for (let i = 1; i <= n; i++) {
      this.nodes.push(new Node(i));
    }
    edges.forEach((edge) => {
      this.nodes[edge[0] - 1].links.push(this.nodes[edge[1] - 1]);
      this.nodes[edge[1] - 1].links.push(this.nodes[edge[0] - 1]);
    });

    this.stack = [];
    this.deepestDepth = 0;
    this.numOfdeepestNodes = 0;
  }

  dfs(node) {
    this.stack.push(node);
    node.depth = 0;
    this.numOfdeepestNodes = 1;

    // let poppedNode = this.stack.pop();
    // poppedNode.links.forEach((linkedNode) => {
    //   if (linkedNode.depth === null) {
    //     this.stack.push(linkedNode);
    //     linkedNode.depth = 1;
    //   }
    // });

    // poppedNode = this.stack.pop();
    // poppedNode.links.forEach((linkedNode) => {
    //   if (linkedNode.depth === null) {
    //     this.stack.push(linkedNode);
    //     linkedNode.depth = 2;
    //   }
    // });

    while (this.stack.length !== 0) {
      const poppedNode = this.stack.pop();
      poppedNode.links.forEach((linkedNode) => {
        if (linkedNode.depth === null) {
          this.stack.push(linkedNode);
          linkedNode.depth = poppedNode.depth + 1;
          if (this.deepestDepth < linkedNode.depth) {
            this.deepestDepth = linkedNode.depth;
            this.numOfDeepestNodes = 1;
            console.log('deepest init');
          } else if (this.deepestDepth === linkedNode.depth) {
            this.numOfdeepestNodes++;
            console.log('deepest i++', this.numOfdeepestNodes);
          }
        }
      });
    }
    console.log('dfs end,   deepestDepth', this.deepestDepth);
  }

  getNumOfDeepestNodes() {
    this.dfs(this.nodes[0]);

    return this.numOfdeepestNodes;
  }
}

const graph = new Graph(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]);
console.log(graph.getNumOfDeepestNodes());

// const graph = new Graph(3, [[1, 2], [3, 1], [1, 2]]);
// console.log('answer', graph.getNumOfDeepestNodes());

// function solution(n, edge) {
//   const graph = new Graph(n, edge);
//   return graph.getNumOfDeepestNodes();
// }
