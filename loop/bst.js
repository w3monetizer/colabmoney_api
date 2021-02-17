// Binary Search Tree - BST constructor
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// BST insert() method
BST.prototype.insert = function (value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value); // recursive case
  }
  else if (value > this.value) {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);  // recursive case
  }
};

// BST contains(value) method - returns true or false
BST.prototype.contains = function (value) {
  if (value === this.value) return true;
  else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);  // recursive case
  } 
  else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);  // recursive case
  }
};

// BST depthFirstTraversl(func, order) method - runs func() through all tree
// running on all branches down to bottom before going to next branch
// In-Order version of DFT - traversing all nodes in order from least to greatest
// the most used in practice because of the order
BST.prototype.depthFirstTraversal = function (iteratorFunc, order) {
  if (order === 'pre-order') iteratorFunc(this.value);
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);  // recursive case
  if (order === 'in-order') iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);  // recursive case
  if (order === 'post-order') iteratorFunc(this.value);
};

// BST breadthFirstTraversal(func) method
BST.prototype.breadthFirstTraversal = function (iteratorFunc) {
  const queue = [this]; // First In First Out Queue; this refs to the root node
  while (queue.length) {
    let treeNode = queue.shift(); // take the root out of the queue
    iteratorFunc(treeNode);
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  }
}

BST.prototype.getMinVal = function () {
  if (this.left) return this.left.getMinVal();
  else return this.value;
}

BST.prototype.getMaxVal = function () {
  if (this.right) return this.right.getMaxVal();
  else return this.value;
}

BST.prototype.delete = function (value) {
    if (value <= this.value) {
        if (!this.left) {
            console.error('The value does not exist in the tree');
        } else {
            if (value === this.left.value) {
                this.left = null;
            } else {
                this.left.delete(value);
            }
        }
    } else if (value > this.value) {
        if (!this.right) {
            console.error('The value does not exist in the tree');
        } else {
            if (value === this.right.value) {
                this.right = null;
            } else {
                this.right.delete(value);
            }
        }
    }
}

// BST Testing
let bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

// Testing delete
bst.delete(15);
bst.depthFirstTraversal(log, 'in-order');

// Testing getMaxVal()
// console.log( bst.getMaxVal());

// Testing getMinVal()
// console.log( bst.getMinVal());

// Testing breadthFirstTraversal()
// bst.breadthFirstTraversal(log);

// Testing depthFirstTraversal()
// bst.depthFirstTraversal(log, 'in-order');

// Defining the iterator function - log() - for depth First
function log(value) {
  console.log(value);
}

// Defining the iterator function - log() - for breadth First
// function log(node) {
//   console.log(node.value);
// }


// Testing contains()
// console.log(bst.contains(50));
// console.log(bst.contains(15));


// Testing insert()
// console.log(bst);
// console.log(bst.right.left.left);
// console.log(bst.left.right.left);
// console.log(bst.right.right);
