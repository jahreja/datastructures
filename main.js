
// Stacks

// Functions: push, pop, peek, length

// let Stack = function(){
//     this.count = 0;
//     this.storage = {};

//     this.push = function(value){
//         this.storage[this.count] = value;
//         this.count++;
//     }

//     this.pop = function(){
//         if (this.count === 0){
//             return undefined;
//         }

//         this.count--;
//         let result = this.storage[this.count];
//         delete this.storage[this.count];
//         return result;
//     }

//     this.size = function(){
//         return this.count;
//     }

//     this.peek = function(){
//         return this.storage[this.count-1];
//     }
// }

// let myStack = new Stack();

// myStack.push(1);
// myStack.push(2);
// console.log(myStack.peek());
// myStack.push("Jack T");
// myStack.push("Spike");
// console.log(myStack.size());

//////////////////////////////////////////////////////////////////////////////////////

// // Sets

// function mySet() {
//     let collection = [];

//     this.has = function(element){
//         return (collection.indexOf(element) !== -1);
//     };

//     this.values = function() {
//         return collection;
//     };

//     this.add = function(element){
//         if(!this.has(element)){
//             collection.push(element)
//             return true;
//         }
//         return false;
//     };

//     this.remove = function(element){
//         if(this.has(element)){
//             index = collection.indexOf(element);
//             collection.splice(index, 1);
//             return true;
//         }
//         return false;
//     };

//     this.size = function(){
//         return collection.length;
//     };

//     this.union = function(otherSet){
//         let unionSet = new mySet();
//         let firstSet = this.values();
//         let secondSet = otherSet.values();
//         firstSet.forEach(function(e){
//             unionSet.add(e);
//         })
//         secondSet.forEach(function(e){
//             unionSet.add(e);
//         })
//         return unionSet;
//     };

//     this.intersection = function(otherSet){
//         let intersectionSet = new mySet();
//         let firstSet = this.values();
//         firstSet.forEach(function(e){
//             if (otherSet.has(e)) {
//                 intersectionSet.add(e);
//             }
//         })
//         return intersectionSet;
//     };

//     this.difference = function(otherSet){
//         let differenceSet = new mySet();
//         let firstSet = this.values();
//         firstSet.forEach(function(e){
//             if(!otherSet.has(e)){
//                 differenceSet.add(e)
//             }
//         })
//         return differenceSet;
//     };

//     this.subset = function(otherSet){
//         let firstSet = this.values();
//         return firstSet.every(function(value){
//             return otherSet.has(value);
//         })
//     }
// }

// let setA = new mySet();
// let setB = new mySet();

// setA.add("a");
// setA.add("b");
// setA.add("c");
// setB.add("a");
// setB.add("c");
// setB.add("d");

// console.log(setB.values());
// console.log(setB.add("a"))

//////////////////////////////////////////////////////////////////////////

// // Queue

// // Stack is first in last out, queue is first in, first out (e.g. print queue)


// function Queue(){
//     collection = [];

//     this.print = function(){
//         console.log(collection);
//     }
    
//     this.enqueue = function(element){
//         collection.push(element);
//     }

//     this.dequeue = function(element){
//         collection.shift(element);
//     }

//     this.front = function(){
//         return collection[0];
//     }

//     this.size = function(){
//         return collection.length;
//     }

//     this.isEmpty = function(){
//         return (collection.length === 0);
//     }
// }

// let q = new Queue();

// q.enqueue("a");
// q.enqueue("b");
// q.enqueue("c")
// q.print();
// q.dequeue("a")
// console.log(q.front())
// q.print()



// // Priority Queue

// function PriorityQueue() {

//     let collection = [];

//     this.printCollection = function(){
//         (console.log(collection));
//     }

//     this.enqueue = function(element){
//         if (this.isEmpty()) {
//             collection.push(element);
//         } else {
//             let added = false;
//             for (let i = 0; i < collection.length; i++){
//                 if (element[1] < collection[i][1]){
//                     collection.splice(i, 0, element);
//                     added = true;
//                     break;
//                 }
//             }

//             if (!added){
//                 collection.push(element);
//             }
//         }
//     }

//     this.dequeue = function(element){
//         let value = collection.shift();
//         return value[0];
//     }

// }


//////////////////////////////////////////////////////////////

// Binary Search Tree

class Node {
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    add(data){
        const node = this.root;
        if(node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function(node){
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null){
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null){
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null){
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    findMin() {
        let current = this.root;
        while (current.left !== null){
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        while (current.right !== null){
            current = current.right;
        }
        return current.data;
    }

    find(data){
        let current = this.root;
        while (current.data !== this.data){
            if (data < current.data){
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null){
                return null;
            }
        }
        return current; 
    }

    isPresent(data){
        let current = this.root;
        while (current) {
            if (data === current.data){
                return true;
            }
            if (data < current.data){
                current = current.left;
            } else {
                current = current.right
            }
        }
        return false; 
    }

    remove(data) {
        const removeNode = function(node, data){
            if (node == null){
                return null;
            }
            if (data == node.data) {
                if (node.left == null && node.right == null){
                    return null;
                }
                if (node.left == null) {
                    return node.right;
                }
                if (node.right == null){
                    return node.left;
                }
                var tempNode = node.right;
                while (tempNode.left !== null){
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data){
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }

    isBalanced(){
        return (this.findMinHeight() >= this.findMaxHeight() - 1)
    }

    findMinHeight(node = this.root){
        if (node == null){
            return -1;
        }
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right){
            return left + 1;
        } else {
            return right + 1;
        }
    }

    findMaxHeight(node = this.root){
        if (node == null){
            return -1;
        }
        if (node.left === null && node.right === null){
            return 0;
        }
        if (node.left === null){
            return this.findMaxHeight(node.right) + 1;
        }
        if (node.right === null){
            return this.findMaxHeight(node.left) + 1;
        }
        const lHeight = this.findMaxHeight(node.left);
        const rHeight = this.findMaxHeight(node.right);
        return Math.max(lHeight, rHeight) + 1;
    }

}

const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(11);
bst.add(5);
bst.add(8);
bst.add(3);
bst.add(1);

console.log(bst.findMaxHeight());



/////////////////////////////////////////////////////////////////////////

// // Hash Tables

// var hash = (string, max) => {
//     var hash = 0;
//     for (var i = 0; i < string.length; i++){
//         hash += string.charCodeAt(i);
//     }
//     return hash % max;
// }

// let HashTable = function() {

//     let storage = [];
//     const storageLimit = 4;

//     this.print = function() {
//         console.log(storage)
//     }

//     this.add = function (key, value){
//         var index = hash(key, storageLimit);
//         if (storage[index] === undefined){
//             storage[index] = [
//                 [key, value]
//             ];
//         } else {
//             var inserted = false;
//             for (var i = 0; i < storage[index].length; i++){
//                 if (storage[index][i][0] === key){
//                     storage[index][i][1] = value;
//                     inserted = true;
//                 }
//             }
//             if (inserted === false){
//                 storage[index].push([key, value]);
//             }
//         }
//     }

// }


// // Ben Awad Hash

// function hashStringToInt(s, tableSize) {
//     let hash = 17;

//     for (let i = 0; i < s.length; i++){
//         hash = (13 * hash * s.charCodeAt(i)) % tableSize
//     }

//     return hash;

// }

// class HashTable {

//     table = new Array(2000);
//     numItems = 0;

//     resize = () => {
//         const newTable = new Array(this.table.length * 2);
//         this.table.forEach(item => {
//             if (item){
//                 item.forEach(([key, value]) => {
//                     const index = hashStringToInt(key, newTable.length);
//                     if (newTable[index]){
//                         newTable[index].push([key, value])
//                     } else {
//                         newTable[index] = [[key, value]];    
//                     }
//                 })
//             }
//         })
//         this.table = newTable;
//     }

//     setItem = (key, value) => {
//         this.numItems++;
//         const loadFactor = this.numItems / this.table.length;

//         if (loadFactor > .8){
//             console.log("resizing");
//             this.resize();
//         }

//         const index = hashStringToInt(key, this.table.length);
//         if (this.table[index]){
//             this.table[index].push([key, value])
//         } else {
//             this.table[index] = [[key, value]];    
//         }
        
//     }

//     getItem = (key) => {
//         const index = hashStringToInt(key, this.table.length);
//         if (!this.table[index]){
//             return null;
//         }

//         return (this.table[index].find(x => x[0] === key)[1] + " " + index);
//     }
// }

// const myTable = new HashTable()

// myTable.setItem(["firstName", "lastName"], ["jack", "taylor"]);

// console.log(myTable.getItem("firstName"));
