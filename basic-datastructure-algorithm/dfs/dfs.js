class Node {
  constructor(element) {
    this.element = element;
    this.adjacencyList = [];
    this.checked = false; // dfs할 때 확인했는지 체크
    this.depth = 0; // dfs/bfs에서 depth
  }
}

class Graph {
  constructor(nodes) {
    this.nodes = nodes;
    this.depth = 0;
    this.stack = [];
  }

  /**
   * 깊이 우선 탐색 함수
   * @param {Node} o.node
   * @param {Node[]} o.stack
   */
  dfs(o) {
    // 1.꺼내고
    // 2.담을 수 있는거 먼저 다 담고
    // 3.출력하고
    // 담을 게 없으면 출력하고. 다시 꺼내고 출력하고..
    const currentNode = o.node;
    currentNode.checked = true;

    for (let i = 0; i < currentNode.adjacencyList.length; i += 1) {
      if (!currentNode.adjacencyList[i].checked) {
        currentNode.adjacencyList[i].depth = currentNode.depth + 1;
        currentNode.adjacencyList[i].checked = true;
        o.stack.push(currentNode.adjacencyList[i]);
      }
    }
    console.log(currentNode.element, 'depth', currentNode.depth);
    if (o.stack.length !== 0) {
      this.dfs({ node: o.stack.pop(), stack: o.stack });
    }
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);

node1.adjacencyList = [node2, node3];
node2.adjacencyList = [node1, node3];
node3.adjacencyList = [node1, node4];
node4.adjacencyList = [node2, node3, node5];
node5.adjacencyList = [node4, node6];
node6.adjacencyList = [node5];

const graph = new Graph([node1, node2, node3, node4, node5, node6]);


// graph.dfsInit(node1);
graph.dfs({ node: node1, stack: [] });
