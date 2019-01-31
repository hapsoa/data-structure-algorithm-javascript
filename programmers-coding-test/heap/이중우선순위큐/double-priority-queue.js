class Node {
    data = null;
    parent = null;
    left = null; //Node
    right = null; //Node
}

class Tree {
    root = null; // Node

    setRoot(node) {
        this.root = node;
    }

    getRoot() {
        return root;
    }

    makeNode(left, data, right) {
        const node = new Node();
        node.data = data;
        node.left = left;
        node.right = right;
        return node;
    }

    insert(node) {

    }
}

const tree = new Tree();

const n4 = tree.makeNode(null, 2, null);
const n3 = tree.makeNode(null, 7, null);
const n2 = tree.makeNode(null, 5, null);
const n1 = tree.makeNode(n3, 4, n4);
const root = tree.makeNode(n1, 3, n2);

tree.setRoot(root);


