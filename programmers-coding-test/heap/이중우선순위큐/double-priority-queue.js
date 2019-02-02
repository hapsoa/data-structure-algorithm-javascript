/* eslint-disable no-lonely-if */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
class Node {
  constructor(data) {
    this.data = data; // number

    this.max = {
      index: null, // number
      parent: null, // Node
      leftChild: null, // Node
      rightChild: null, // Node
    };
    this.min = {
      index: null, // number
      parent: null, // Node
      leftChild: null, // Node
      rightChild: null, // Node
    };
  }

  makeChildOfParentNullForMax() {
    if (this.index % 2 === 1) {
      this.max.parent.leftChild = null;
    } else {
      this.max.parent.rightChild = null;
    }
  }

  makeChildOfParentNullForMin() {
    if (this.index % 2 === 1) {
      this.min.parent.leftChild = null;
    } else {
      this.min.parent.rightChild = null;
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
      node[this.maxMin].parent = parentNode;
      parentNode[this.maxMin].leftChild = node;
    } else if (node.index !== 0) {
      // 자신이 root가 아닌 짝수 index라면
      parentNode = this.nodeArray[node.index / 2];
      node[this.maxMin].parent = parentNode;
      parentNode[this.maxMin].rightChild = node;
    }

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
      if (this.maxMin === 'max' && node.max.parent !== null) {
        if (node.max.parent.data < node.data) {
          console.log('??');
          Heap.switchData(node.max.parent, node);
          this.arrangePositionAtUp(node.max.parent);
        }
      } else if (this.maxMin === 'min' && node.min.parent !== null) {
        if (node.min.parent.data > node.data) {
          Heap.switchData(node.min.parent, node);
          this.arrangePositionAtUp(node.min.parent);
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

const minHeap = new Heap('min');
const maxHeap = new Heap('max');

const n0 = new Node(1);
const n1 = new Node(2);
const n2 = new Node(3);
const n3 = new Node(4);
const n4 = new Node(5);

minHeap.insertNode(n0);
minHeap.insertNode(n1);
minHeap.insertNode(n2);
minHeap.insertNode(n3);
minHeap.insertNode(n4);

// maxHeap.insertNode(n0);
// maxHeap.insertNode(n1);
// maxHeap.insertNode(n2);
// maxHeap.insertNode(n3);
// maxHeap.insertNode(n4);

minHeap.showNodeArray();
// maxHeap.showNodeArray();
