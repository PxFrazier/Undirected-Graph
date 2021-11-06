class Node
{
    constructor(data)
    {
        this.data = data;
    }

    printNodeInfo()
    {
        console.log(this.data);
    }
}

class Undirected_Graph
{   
    constructor()
    {
        this.graph = new Map();
        this.size = 0;
    }

    addNode(key, ...values)
    {
        this.graph.set(key, new Set(values));
        this.size++;
    }

    getAt(key)
    {
        return this.graph.get(key);
    }

    deleteNode(key)
    {
        this.graph.delete(key);
        this.size--;
    }

    isAdjacent(key, node)
    {
        return this.graph.get(key).has(node);
    }

    print()
    {
        console.log(this.graph);
    }
}

const myGraph = new Undirected_Graph();

myGraph.addNode(0, node_one = new Node(1), node_two = new Node(2), node_three = new Node(3));
myGraph.addNode(1, node_zero = new Node(0));
myGraph.addNode(2, node_zero);
myGraph.addNode(3, node_zero);

myGraph.print();

console.log(myGraph.isAdjacent(0, node_one));
Array.from(myGraph.getAt(0))[0].printNodeInfo();
