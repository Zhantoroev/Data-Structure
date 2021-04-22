# Graph
A Graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph.

![enter image description here](https://www.geeksforgeeks.org/wp-content/uploads/undirectedgraph.png)

More precisely, a graph is a data structure (V, E) that consists of

-   A collection of vertices V
-   A collection of edges E, represented as ordered pairs of vertices (u,v)

![enter image description here](https://cdn.programiz.com/sites/tutorial2program/files/graph-vertices-edges_0.png)
```
V = {0, 1, 2, 3}
E = {(0,1), (0,2), (0,3), (1,2)}
G = {V, E}
```

## Graph Terminology

-   **Adjacency**: A vertex is said to be adjacent to another vertex if there is an edge connecting them. Vertices 2 and 3 are not adjacent because there is no edge between them.
-   **Path**: A sequence of edges that allows you to go from vertex A to vertex B is called a path. 0-1, 1-2 and 0-2 are paths from vertex 0 to vertex 2.
-   **Directed Graph**: A graph in which an edge (u,v) doesn't necessarily mean that there is an edge (v, u) as well. The edges in such a graph are represented by arrows to show the direction of the edge.

## Graph Representation

Graphs are commonly represented in two ways:

### 1. Adjacency Matrix

An adjacency matrix is a 2D array of V x V vertices. Each row and column represent a vertex.

If the value of any element  `a[i][j]`  is 1, it represents that there is an edge connecting vertex i and vertex j.

![enter image description here](https://cdn.programiz.com/sites/tutorial2program/files/adjacency-matrix_1.png)

### 2. Adjacency List

An adjacency list represents a graph as an array of linked lists.

The index of the array represents a vertex and each element in its linked list represents the other vertices that form an edge with the vertex.

![enter image description here](https://cdn.programiz.com/sites/tutorial2program/files/adjacency-list.png)

## Graph Operations

The most common graph operations are:

-   **Add Vertex**  − Adds a vertex to the graph.
    
-   **Add Edge**  − Adds an edge between the two vertices of the graph.

-   **Remove Vertex** - Removes vertex from the graph.

-   **Remove Edge** - Removes edge from the graph.

-   **Display Vertex**  − Displays a vertex of the graph.

|Operations| Time complexity  |
|--|--|
| Add Vertex | O(1)  |
| Add Edge | O(1) |
| Remove Vertex | O(\|V\| + \|E\|) |
| Remove Edge | O(\|E\|) |
| Query | O(\|V\|) |

## Why do we need Graph?
Graphs are used to solve many real-life problems. Graphs are used to represent networks. The networks may include paths in a city or telephone network or circuit network. Graphs are also used in social networks like linkedIn, Facebook. For example, in Facebook, each person is represented with a vertex(or node). Each node is a structure and contains information like person id, name, gender, locale etc.

## Applications of Graph Data Structure
-   In  **Computer science**  graphs are used to represent the flow of computation.
-   **Google maps**  uses graphs for building transportation systems, where intersection of two(or more) roads are considered to be a vertex and the road connecting two vertices is considered to be an edge, thus their navigation system is based on the algorithm to calculate the shortest path between two vertices.
-   In  **Facebook**, users are considered to be the vertices and if they are friends then there is an edge running between them. Facebook’s Friend suggestion algorithm uses graph theory. Facebook is an example of  **undirected graph**.
-   In  **World Wide Web**, web pages are considered to be the vertices. There is an edge from a page u to other page v if there is a link of page v on page u. This is an example of  **Directed graph**. It was the basic idea behind  [Google Page Ranking Algorithm](https://www.geeksforgeeks.org/page-rank-algorithm-implementation/).
-   In  **Operating System**, we come across the Resource Allocation Graph where each process and resources are considered to be vertices. Edges are drawn from resources to the allocated process, or from requesting process to the requested resource. If this leads to any formation of a cycle then a deadlock will occur.

## Implementation of Graph 
*Java language*
```java
import java.util.*;
 
//class to store edges of the weighted graph
class Edge {
    int src, dest, weight;
    Edge(int src, int dest, int weight) {
            this.src = src;
            this.dest = dest;
            this.weight = weight;
        }
}
// Graph class
class Graph {
    // node of adjacency list 
    static class Node {
        int value, weight;
        Node(int value, int weight)  {
            this.value = value;
            this.weight = weight;
        }
    };
 
// define adjacency list
 
List<List<Node>> adj_list = new ArrayList<>();
 
    //Graph Constructor
    public Graph(List<Edge> edges)
    {
        // adjacency list memory allocation
        for (int i = 0; i < edges.size(); i++)
            adj_list.add(i, new ArrayList<>());
 
        // add edges to the graph
        for (Edge e : edges)
        {
            // allocate new node in adjacency List from src to dest
            adj_list.get(e.src).add(new Node(e.dest, e.weight));
        }
    }
// print adjacency list for the graph
    public static void printGraph(Graph graph)  {
        int src_vertex = 0;
        int list_size = graph.adj_list.size();
 
        System.out.println("The contents of the graph:");
        while (src_vertex < list_size) {
            //traverse through the adjacency list and print the edges
            for (Node edge : graph.adj_list.get(src_vertex)) {
                System.out.print("Vertex:" + src_vertex + " ==> " + edge.value + 
                                " (" + edge.weight + ")\t");
            }
 
            System.out.println();
            src_vertex++;
        }
    }
}
public class Main{
    public static void main (String[] args) {
        // define edges of the graph 
        List<Edge> edges = Arrays.asList(new Edge(0, 1, 2),new Edge(0, 2, 4),
                   new Edge(1, 2, 4),new Edge(2, 0, 5), new Edge(2, 1, 4),
                   new Edge(3, 2, 3), new Edge(4, 5, 1),new Edge(5, 4, 3));
 
        // call graph class Constructor to construct a graph
        Graph graph = new Graph(edges);
 
        // print the graph as an adjacency list
        Graph.printGraph(graph);
    }
}
```






