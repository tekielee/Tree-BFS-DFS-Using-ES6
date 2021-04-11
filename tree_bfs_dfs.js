class TreeNode {
	constructor(data = null) {
		this.data = data;
		this.children = [];
	}
	
	addChildren(node) {
		this.children.push(node);
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
			for(let i = 0; i < current.children.length; i++) {
				queue.enqueue(current.children[i]);
			}
		}
		return visited;
	}
	
	DFS(node) {
		this.visited.enqueue(node);
		if(node.children) {
			for(let i = 0; i < node.children.length; i++) {
				this.DFS(node.children[i]);
			}
		}
	}
}

let root = new TreeNode('8');
let tree = new Tree(root);
let node1 = new TreeNode('3');
let node2 = new TreeNode('10');
root.addChildren(node1);
root.addChildren(node2);

let node3 = new TreeNode('1');
let node4 = new TreeNode('6');
let node5 = new TreeNode('14');
node1.addChildren(node3);
node1.addChildren(node4);
node2.addChildren(node5);

let node6 = new TreeNode('4');
let node7 = new TreeNode('7');
let node8 = new TreeNode('13');
node4.addChildren(node6);
node4.addChildren(node7);
node5.addChildren(node8);

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