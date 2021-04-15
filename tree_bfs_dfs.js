class TreeNode {
	constructor(data = null) {
		this.data = data;
	}
	
	addChildren(left, right) {
		this.left = left;
		this.right = right;
	}
}

class Tree {
	constructor(root) {
		this.root = root;
		this.visited = new Queue();
	}
	
	BFS(node) {
		let queue = new Queue();
		let visited = new Queue();
		queue.enqueue(node);
		while(!queue.isEmpty()) {
			let current = queue.dequeue();
			visited.enqueue(current);
			if(current.left && current.right) {
				queue.enqueue(current.left);
				queue.enqueue(current.right);
			} else if(current.left) {
				queue.enqueue(current.left);
			} else if(current.right) {
				queue.enqueue(current.right);
			}
		}
		return visited;
	}
	
	DFS(node) {
		this.visited.enqueue(node);
		if(node) {
			if(node.left) {
				this.DFS(node.left);
			}
			if(node.right) {
				this.DFS(node.right);
			}
		}
	}
}

let root = new TreeNode('8');
let tree = new Tree(root);
let node1 = new TreeNode('3');
let node2 = new TreeNode('10');
root.addChildren(node1, node2);

let node3 = new TreeNode('1');
let node4 = new TreeNode('6');
node1.addChildren(node3, node4);

let node5 = new TreeNode('14');
node2.addChildren(null, node5);

let node6 = new TreeNode('4');
let node7 = new TreeNode('7');
node4.addChildren(node6, node7);

let node8 = new TreeNode('13');
node5.addChildren(node8, null);

console.log(root);

let visitedBFS = tree.BFS(tree.root);
while(!visitedBFS.isEmpty()) {
	console.log(visitedBFS.dequeue().data);
}
console.log('');
tree.DFS(tree.root);
let visitedDFS = tree.visited;
while(!visitedDFS.isEmpty()) {
	console.log(visitedDFS.dequeue().data);
}