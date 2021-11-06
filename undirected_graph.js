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
