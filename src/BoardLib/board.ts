import { Graph } from 'typescript-graph'
import {StickyType} from './sticky.ts'
export type StickyId = string;

// Identify the node type to be used with the graph
export type Sticky = { id: string, title: string, type: StickyType , content: string}
// Define a custom identity function with which to identify nodes
export class Board{
    id:string;
    nodes=  new Graph<Sticky>((n: Sticky) => n.id);
    constructor(id:string){
        this.id = id;
    }
}


// // Insert nodes into the graph
// const node1 = graph.insert({id: 'node1', count: 45, metadata: {color: 'green'}})
// const node2 = graph.insert({id: 'node2', count: 5, metadata: {color: 'red', style: 'normal'}})
// const node3 = graph.insert({id: 'node3', count: 15, metadata: {color: 'blue', size: 'large'}})

// // Add edges between the nodes we created.
// graph.addEdge(node1, node2)
// graph.addEdge(node2, node3)

// // Get a node
// const node: NodeType = graph.getNode(node2);