// 트리를 구성한 것을 뱉는다.

// nodes를 ' '기준으로 분리한다.

// 반복하면서 tree를 하나씩 구성한다.
// 부모의 부모를 찾는다.
// 자식이 없으면 부모 오른쪽에 바로 괄호를 친다.
// 자식이 하나 있으면 부모 오른쪽에 괄호하나 넘고 괄호를 친다.

// 문제가 없으면 만든 sExpression을 return한다.
// 문제가 있으면 해당 에러를 return한다.

class Node {
  constructor(nodeName) {
    this.name = nodeName;
    this.children = [];
    this.parent = null;
  }

  setChild(node) {
    if (this.children.length < 2) {
      this.children.push(node);
      this.children.sort((node1, node2) => node1.name < node2.name);
    } else {
      throw new Error("E1");
    }
  }

  setParent(node) {
    if (this.parent === null) {
      this.parent = node;
    } else {
      throw new Error("E3");
    }
  }
}

// for문 돌면서 검사한다.
// 자식이 3개 이상인지
// 부모가 2개인지

// 초반 체크
// 같은 edge가 여러개인지

// 마지막 체크
// root가 2개인지

// 에러가 아니면 sExpression으로 표현한다.
class Tree {
  constructor() {
    this.treeNodes = {};
    this.branchesHash = {};
  }

  setBranch(branch) {
    // 같은 edge가 여러개인지
    if (this.branchesHash.hasOwnProperty(branch)) {
      throw new Error("E2");
    }
    this.branchesHash[branch] = true;

    const parentNodeName = branch[1];
    const childNodeName = branch[3];

    let parentNode = null;
    let childNode = null;

    if (this.treeNodes.hasOwnProperty(parentNodeName)) {
      parentNode = this.treeNodes[parentNodeName];
    } else {
      parentNode = new Node(parentNodeName);
      this.treeNodes[parentNodeName] = parentNode;
    }

    if (this.treeNodes.hasOwnProperty(childNodeName)) {
      childNode = this.treeNodes[childNodeName];
    } else {
      childNode = new Node(childNodeName);
      this.treeNodes[childNodeName] = childNode;
    }

    try {
      parentNode.setChild(childNode);
      childNode.setParent(parentNode);
    } catch (error) {
      throw error;
    }
  }

  getRoot() {
    let root = null;
    for (let i = 0; i < this.treeNodes.length; i++) {
      if (this.treeNodes[i].parent === null) {
        root = this.treeNodes[i].parent;
      }
    }
  }
}

/**
 * sExpression으로 표현한다.
 * @param {string} nodes (부모, 자식)으로 이루어진 여러개 모음. ex) "(B,D) (D,E) (A,B) (C,F) (E,G) (A,C)"
 * @return {string} (A(B)(C))
 */
function sExpression(nodes) {
  const branches = nodes.split(" ");
  let sExpression = "";
  const tree = new Tree();

  for (let i = 0; i < branches.length; i++) {
    const branch = branches[i];
    tree.setBranch(branch);
  }

  console.log("treeNodes", tree.treeNodes);

  // const testNode = new Node("A");
  // console.log(testNode.leftChild);
}

sExpression("(A,B) (A,C)");
