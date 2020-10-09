/* eslint-disable no-lonely-if */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
class Node {
  constructor(data) {
    this.data = data; // number
    this.index = null; // number
    this.parent = null; // Node
    this.leftChild = null; // Node
    this.rightChild = null; // Node
  }

  makeChildOfParentNull() {
    if (this.index % 2 === 1) {
      this.parent.leftChild = null;
    } else {
      this.parent.rightChild = null;
    }
  }
}

class Heap {
  constructor(maxMin) {
    this.nodeArray = []; // Node[]
    this.maxMin = maxMin; // 'max' or 'min'
  }

  insertNode(node) {
    this.nodeArray.push(node);
    node.index = this.nodeArray.length - 1;

    // 새로삽입한 노드를 부모 노드와 연결시킨다
    let parentNode = null;
    if (node.index % 2 === 1) {
      // 자신이 홀수 index라면, 부모의 index는 x/2
      parentNode = this.nodeArray[Math.floor(node.index / 2)];
      node.parent = parentNode;
      parentNode.leftChild = node;
    } else if (node.index !== 0) {
      // 자신이 root가 아닌 짝수 index라면
      parentNode = this.nodeArray[node.index / 2];
      node.parent = parentNode;
      parentNode.rightChild = node;
    }

    // 위치를 정렬시킨다.
    this.arrangePositionAtUp(node);
  }

  popRootData() {
    const popData = this.nodeArray[0].data;

    this.nodeArray[0].data = this.nodeArray[this.nodeArray.length - 1].data;

    if (this.nodeArray.length > 1) {
      this.nodeArray[this.nodeArray.length - 1].makeChildOfParentNull();
    }
    this.nodeArray.pop();

    if (this.nodeArray.length > 1) {
      this.arrangePositionAtDown(this.nodeArray[0]);
    }

    console.log('pop', popData);
    this.showNodeArray();
    console.log('');

    return popData;
  }

  static switchData(node1, node2) {
    const tempData = node1.data;
    node1.data = node2.data;
    node2.data = tempData;
  }

  arrangePositionAtUp(node) {
    if (node.parent !== null) {
      if (this.maxMin === 'max') {
        if (node.parent.data < node.data) {
          Heap.switchData(node.parent, node);
          this.arrangePositionAtUp(node.parent);
        }
      } else {
        if (node.parent.data > node.data) {
          Heap.switchData(node.parent, node);
          this.arrangePositionAtUp(node.parent);
        }
      }
    }
  }

  arrangePositionAtDown(node) {
    if (this.maxMin === 'max') {
      if (node.leftChild !== null && node.rightChild !== null) {
        if (node.leftChild.data >= node.rightChild.data) {
          if (node.data < node.leftChild.data) {
            Heap.switchData(node, node.leftChild);
            this.arrangePositionAtDown(node.leftChild);
          }
        } else {
          if (node.data < node.rightChild.data) {
            Heap.switchData(node, node.rightChild);
            this.arrangePositionAtDown(node.rightChild);
          }
        }
      } else if (
        node.leftChild !== null
        && node.rightChild === null
        && node.data < node.leftChild.data
      ) {
        Heap.switchData(node, node.leftChild);
        this.arrangePositionAtDown(node.leftChild);
      } else if (
        node.leftChild === null
        && node.rightChild !== null
        && node.data < node.rightChild.data
      ) {
        Heap.switchData(node, node.rightChild);
        this.arrangePositionAtDown(node.rightChild);
      }
    } else { // min
      if (node.leftChild !== null && node.rightChild !== null) {
        if (node.leftChild.data <= node.rightChild.data) {
          if (node.data > node.leftChild.data) {
            Heap.switchData(node, node.leftChild);
            this.arrangePositionAtDown(node.leftChild);
          }
        } else {
          if (node.data > node.rightChild.data) {
            Heap.switchData(node, node.rightChild);
            this.arrangePositionAtDown(node.rightChild);
          }
        }
      } else if (node.leftChild !== null && node.rightChild === null
        && node.data > node.leftChild.data) {
        Heap.switchData(node, node.leftChild);
        this.arrangePositionAtDown(node.leftChild);
      } else if (node.leftChild === null && node.rightChild !== null
        && node.data > node.rightChild.data) {
        Heap.switchData(node, node.rightChild);
        this.arrangePositionAtDown(node.rightChild);
      }
    }
  }

  showNodeArray() {
    const consoleArr = [];
    for (let i = 0; i < this.nodeArray.length; i += 1) {
      consoleArr.push(this.nodeArray[i].data);
    }
    console.log(consoleArr);
  }
}

const tree = new Heap('min');

// tree.insertNode(new Node(3));
// tree.insertNode(new Node(4));
// tree.insertNode(new Node(6));
// tree.insertNode(new Node(1));

// tree.showNodeArray();

// tree.popRootData();
// tree.popRootData();
// tree.popRootData();
// tree.popRootData();

tree.insertNode(new Node(7));
tree.insertNode(new Node(3));
tree.insertNode(new Node(8));
tree.insertNode(new Node(5));
tree.insertNode(new Node(1));
tree.insertNode(new Node(2));
tree.insertNode(new Node(4));

tree.showNodeArray();
console.log('');

tree.popRootData();
tree.popRootData();
tree.popRootData();
tree.popRootData();
tree.popRootData();
tree.popRootData();
tree.popRootData();

console.log('end');
