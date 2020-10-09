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
    this.numOfdeepestNodes = 0;

    // console.log(this.nodes);
  }

  dfs(node) {
    this.stack.push(node);
    node.depth = 0;
    let numOfdeepestNodes = 1;
    let deepestDepth = 0;

    while (this.stack.length !== 0) {
      const poppedNode = this.stack.pop();
      for (let i = 0; i < poppedNode.links.length; i++) {
        // let numOfdeepestNodes = 1;
        const linkedNode = poppedNode.links[i];
        if (linkedNode.depth === null) {
          this.stack.push(linkedNode);
          linkedNode.depth = poppedNode.depth + 1;
          if (deepestDepth < linkedNode.depth) {
            deepestDepth = linkedNode.depth;
            numOfdeepestNodes = 1;
            // console.log('deepest init');
          } else if (deepestDepth === linkedNode.depth) {
            numOfdeepestNodes++;
          }
        }
      }
    }
    this.numOfdeepestNodes = numOfdeepestNodes;
    // console.log('dfs end,   deepestDepth', this.deepestDepth);
  }

  getNumOfDeepestNodes() {
    this.dfs(this.nodes[0]);

    return this.numOfdeepestNodes;
  }
}

// const graph = new Graph(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]);
// const graph = new Graph(3, [[1, 2], [3, 1], [1, 2]]);
// const graph = new Graph(6, [[1, 2], [3, 1], [1, 2], [2, 4], [4, 5], [6, 4]]);
const graph = new Graph(10, [[1, 2], [1, 3], [1, 4], [3, 5], [4, 5], [5, 7], [5, 6], [5, 8], [2, 9], [9, 10]]);

console.log('answer', graph.getNumOfDeepestNodes());

function solution(n, edge) {
  const graph = new Graph(n, edge);
  return graph.getNumOfDeepestNodes();
}
