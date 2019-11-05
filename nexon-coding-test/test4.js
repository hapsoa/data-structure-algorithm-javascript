// 트리를 구성한 것을 뱉는다.

// nodes를 ' '기준으로 분리한다.

// 반복하면서 tree를 하나씩 구성한다.
// 부모의 부모를 찾는다.
// 자식이 없으면 부모 오른쪽에 바로 괄호를 친다.
// 자식이 하나 있으면 부모 오른쪽에 괄호하나 넘고 괄호를 친다.

// 문제가 없으면 만든 sExpression을 return한다.
// 문제가 있으면 해당 에러를 return한다.

class Node {
  constructor(node) {
    this.node = node;
    this.leftChild = null;
    this.rightChild = null;
  }

  setChild(node) {}
}

/**
 * sExpression으로 표현한다.
 * @param {string} nodes (부모, 자식)으로 이루어진 여러개 모음. ex) "(B,D) (D,E) (A,B) (C,F) (E,G) (A,C)"
 * @return {string} (A(B)(C))
 */
function sExpression(nodes) {
  const branches = nodes.split(" ");
  let sExpression = "";

  for (let i = 0; i < branches.length; i++) {
    const branch = branches[i];
    // console.log("node", node);

    const parentNode = branch[1];
    const childNode = branch[3];

    // console.log(parentNode, childNode);
  }

  const testNode = new Node("A");
  console.log(testNode.leftChild);
}

sExpression("(A,B) (A,C)");
