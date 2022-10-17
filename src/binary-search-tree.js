const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node{
	constructor(data){
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree{
	constructor(){
		this.rootNode = null;
	}
	root(){
		return this.rootNode;
	}

	add(data){
		
		this.rootNode = addNode(this.rootNode, data);

		function addNode(node, data){
			if(!node) return new Node(data);
			if(node.data === data) return node;

			if(node.data > data) {
				node.left = addNode(node.left, data);
			}	else {
				node.right = addNode(node.right, data);
			}
			return node;
		}
	}

	has(data){
		return hasNode(this.rootNode, data);

		function hasNode(node, data){
			if(!node) return false;
			if(node.data === data) return true;
			

			if(data > node.data){
				return hasNode(node.right, data);
			} else {
				return hasNode(node.left, data);
			}
		}
	}

	find(data){
		return findNode(this.rootNode, data);

		function findNode(node, data){
			if(!node) return null;
			if(node.data === data) return node;

			if(data > node.data){
				return findNode(node.right, data);
			} else{
				return findNode(node.left, data);
			}
		}
	}

	remove(data){
		this.rootNode = removeNode(this.rootNode, data);

		function removeNode(node, data){
			if (!node) return null;
			if(data > node.data){
				node.right = removeNode(node.right, data);
				return node;
			} else if(data < node.data){
				node.left = removeNode(node.left, data);
				return node;
			} else {
				if(!node.left && !node.right){
					return null;
				}
				if(!node.left){
					node = node.right;
					return node;
				}
				if(!node.right){
					node = node.left;
					return node;
				}
				
				let maxLeftValue = node.left;
				while(maxLeftValue.right){
					maxLeftValue=maxLeftValue.right;
				}
				node.data = maxLeftValue.data;
				node.left = removeNode(node.left, maxLeftValue.data);

				return node;
			}

		}
	}

	min(){
		if(!this.rootNode) return null;
		let minNodeValue = this.rootNode;
		while(minNodeValue.left){
			minNodeValue = minNodeValue.left;
		}
		return minNodeValue.data;
	}

	max(){
		if(!this.rootNode) return null;
		let maxNodeValue = this.rootNode;
		while(maxNodeValue.right){
			maxNodeValue = maxNodeValue.right;
		}
		return maxNodeValue.data;
	}
}

module.exports = {
  BinarySearchTree
};