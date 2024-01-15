class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    let currentNode = this.root;
    let newNode = new Node(val);

    while (currentNode) {
      if (newNode.val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      }
      if (newNode.val > currentNode.val) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new Node(val);
        return this;
      }
      else {
        return this.insertRecursively(val, currentNode.left);
      }
    }
    if (val > currentNode.val) {
      if (!currentNode.right) {
        currentNode.right = new Node(val);
        return this;
      }
      else {
        return this.insertRecursively(val, currentNode.right);
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return undefined;

    let currentNode = this.root;

    while (currentNode) {
      if (val === currentNode.val) {
        return currentNode;
      }
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      }
      if (val > currentNode.val) {
        currentNode = currentNode.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if (!this.root) return undefined;

    if (val === currentNode.val) {
      return currentNode;
    }

    if (val < currentNode.val) {
      if (!currentNode.left) return undefined;
      else return this.findRecursively(val, currentNode.left);
    }

    if (val > currentNode.val) {
      if (!currentNode.right) return undefined;
      else return this.findRecursively(val, currentNode.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(currentNode=this.root, visited=[]) {
    if (!currentNode) return visited;

    visited.push(currentNode.val);

    if (currentNode.left) {
      this.dfsPreOrder(currentNode.left, visited);
    }

    if (currentNode.right) {
      this.dfsPreOrder(currentNode.right, visited);
    }
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(currentNode=this.root, visited=[]) {
    if (!currentNode) return visited;

    if (currentNode.left) {
      this.dfsInOrder(currentNode.left, visited);
    }

    visited.push(currentNode.val);

    if (currentNode.right) {
      this.dfsInOrder(currentNode.right, visited);
    }

    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(currentNode=this.root, visited=[]) {
    if (!currentNode) return visited;

    if (currentNode.left) {
      this.dfsPostOrder(currentNode.left, visited);
    }

    if (currentNode.right) {
      this.dfsPostOrder(currentNode.right, visited);
    }

    visited.push(currentNode.val);

    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs(currentNode=this.root, visited=[], queue=[]) {
    if (!currentNode) return visited;

    visited.push(currentNode.val);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    if (queue.length) {
      this.bfs(queue.shift(), visited, queue);
    }

    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced(currentNode=this.root) {
    if (!currentNode) return true;

    function getHeight(currentNode) {
      if (!currentNode) return 0;
      return 1 + Math.max(getHeight(currentNode.left), getHeight(currentNode.right));
    }

    let leftHeight = getHeight(currentNode.left);
    let rightHeight = getHeight(currentNode.right);

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return false;
    }

    return this.isBalanced(currentNode.left) && this.isBalanced(currentNode.right);

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
  }
}

module.exports = BinarySearchTree;