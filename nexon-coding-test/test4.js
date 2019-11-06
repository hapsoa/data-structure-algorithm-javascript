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

      // 같은 edge가 여러개인지
      if (this.branchesHash.hasOwnProperty(branch)) {
        throw new Error("E2");
      }
      this.branchesHash[branch] = true;

      childNode.setParent(parentNode);
    } catch (error) {
      throw error;
    }
  }

  getRoot() {
    let root = null;

    const treeNodesKeys = Object.keys(this.treeNodes);
    for (let i = 0; i < treeNodesKeys.length; i++) {
      const key = treeNodesKeys[i];
      const node = this.treeNodes[key];

      if (node.parent === null && root !== null) {
        throw new Error("E4");
      }
      if (node.parent === null) {
        root = node;
      }
    }

    return root;
  }
}

/**
 * sExpression으로 표현한다.
 * @param {string} nodes (부모, 자식)으로 이루어진 여러개 모음. ex) "(B,D) (D,E) (A,B) (C,F) (E,G) (A,C)"
 * @return {string} (A(B)(C))
 */
function sExpression(nodes) {
  try {
    const branches = nodes.split(" ");
    const tree = new Tree();

    for (let i = 0; i < branches.length; i++) {
      const branch = branches[i];
      tree.setBranch(branch);
    }

    const root = tree.getRoot();

    // rootNode부터 sExpression으로 만든다.
    let sExpression = `(${root.name})`;
    let queue = [];
    queue.push(root);

    while (queue.length !== 0) {
      // 빼고
      const escapedNode = queue.shift();

      // 출력한다. 필요 코드를 작성한다.
      let childrenSExpression = "";
      for (let i = 0; i < escapedNode.chiÏEdren.length; i++) {
        const child = escapedNode.children[i];
        childrenSExpression += `(${child.name})`;
      }

      sExpression = sExpression.replace(
        `(${escapedNode.name})`,
        `(${escapedNode.name}${childrenSExpression})`
      );

      // 집어넣고
      if (escapedNode.children.length !== 0) {
        queue = queue.concat(escapedNode.children);
      }
    }

    return sExpression;
  } catch (error) {
    if (
      error.message === "E1" ||
      error.message === "E2" ||
      error.message === "E3" ||
      error.message === "E4"
    ) {
      return error.message;
    } else {
      return "E5";
    }
  }
}

// const result = sExpression("(A,B) (A,C)");
// const result = sExpression("(B,D) (D,E) (A,B) (C,F) (E,G) (A,C)");
// const result = sExpression("(A,B) (A,C) (B,D) (D,C)");
const result = sExpression("(A,B) (B,C) (C,A)");
console.log("result", result);
