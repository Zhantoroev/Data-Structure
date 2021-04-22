import { Table } from 'react-bootstrap';

function Graph() {
  return (
    <div className='contentPage'>
      <h1 className="mainTitle">Graph</h1>
      <p>A Graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph.</p>
      <p><img src="https://www.geeksforgeeks.org/wp-content/uploads/undirectedgraph.png" alt="graph" /></p>
      <p>More precisely, a graph is a data structure (V, E) that consists of</p>
      <ul>
        <li>A collection of vertices V</li>
        <li>A collection of edges E, represented as ordered pairs of vertices (u,v)</li>
      </ul>
      <p><img src="https://cdn.programiz.com/sites/tutorial2program/files/graph-vertices-edges_0.png" alt="graph" /></p>
      <pre><code>V = {"{"}<span className="hljs-number">0</span>, <span className="hljs-number">1</span>, <span className="hljs-number">2</span>, <span className="hljs-number">3</span>{"}"}{"\n"}E = {"{"}(<span className="hljs-number">0</span>,<span className="hljs-number">1</span>), (<span className="hljs-number">0</span>,<span className="hljs-number">2</span>), (<span className="hljs-number">0</span>,<span className="hljs-number">3</span>), (<span className="hljs-number">1</span>,<span className="hljs-number">2</span>){"}"}{"\n"}G = {"{"}V, E{"}"}{"\n"}</code></pre><h2 id="graph-terminology">Graph Terminology</h2>
      <ul>
        <li><strong>Adjacency</strong>: A vertex is said to be adjacent to another vertex if there is an edge connecting them. Vertices 2 and 3 are not adjacent because there is no edge between them.</li>
        <li><strong>Path</strong>: A sequence of edges that allows you to go from vertex A to vertex B is called a path. 0-1, 1-2 and 0-2 are paths from vertex 0 to vertex 2.</li>
        <li><strong>Directed Graph</strong>: A graph in which an edge (u,v) doesn't necessarily mean that there is an edge (v, u) as well. The edges in such a graph are represented by arrows to show the direction of the edge.</li>
      </ul>
      <h2 id="graph-representation">Graph Representation</h2>
      <p>Graphs are commonly represented in two ways:</p>
      <h3 id="1-adjacency-matrix">1. Adjacency Matrix</h3>
      <p>An adjacency matrix is a 2D array of V x V vertices. Each row and column represent a vertex.</p>
      <p>If the value of any element  <code>a[i][j]</code>  is 1, it represents that there is an edge connecting vertex i and vertex j.</p>
      <p><img src="https://cdn.programiz.com/sites/tutorial2program/files/adjacency-matrix_1.png" alt="graph" /></p>
      <h3 id="2-adjacency-list">2. Adjacency List</h3>
      <p>An adjacency list represents a graph as an array of linked lists.</p>
      <p>The index of the array represents a vertex and each element in its linked list represents the other vertices that form an edge with the vertex.</p>
      <p><img src="https://cdn.programiz.com/sites/tutorial2program/files/adjacency-list.png" alt="graph" /></p>
      <h2 id="graph-operations">Graph Operations</h2>
      <p>The most common graph operations are:</p>
      <ul>
        <li><p><strong>Add Vertex</strong>  − Adds a vertex to the graph.</p>
        </li>
        <li><p><strong>Add Edge</strong>  − Adds an edge between the two vertices of the graph.</p>
        </li>
        <li><p><strong>Remove Vertex</strong> - Removes vertex from the graph.</p>
        </li>
        <li><p><strong>Remove Edge</strong> - Removes edge from the graph.</p>
        </li>
        <li><p><strong>Display Vertex</strong>  − Displays a vertex of the graph.</p>
        </li>
      </ul>
      <Table striped bordered hover style={{marginTop:'50px'}}>
        <thead>
          <tr>
            <th>Operations</th>
            <th>Time complexity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Add Vertex</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td>Add Edge</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td>Remove Vertex</td>
            <td>O(|V| + |E|)</td>
          </tr>
          <tr>
            <td>Remove Edge</td>
            <td>O(|E|)</td>
          </tr>
          <tr>
            <td>Query</td>
            <td>O(|V|)</td>
          </tr>
        </tbody>
      </Table>
      <h2 id="why-do-we-need-graph-">Why do we need Graph?</h2>
      <p>Graphs are used to solve many real-life problems. Graphs are used to represent networks. The networks may include paths in a city or telephone network or circuit network. Graphs are also used in social networks like linkedIn, Facebook. For example, in Facebook, each person is represented with a vertex(or node). Each node is a structure and contains information like person id, name, gender, locale etc.</p>
      <h2 id="applications-of-graph-data-structure">Applications of Graph Data Structure</h2>
      <ul>
        <li>In  <strong>Computer science</strong>  graphs are used to represent the flow of computation.</li>
        <li><strong>Google maps</strong>  uses graphs for building transportation systems, where intersection of two(or more) roads are considered to be a vertex and the road connecting two vertices is considered to be an edge, thus their navigation system is based on the algorithm to calculate the shortest path between two vertices.</li>
        <li>In  <strong>Facebook</strong>, users are considered to be the vertices and if they are friends then there is an edge running between them. Facebook’s Friend suggestion algorithm uses graph theory. Facebook is an example of  <strong>undirected graph</strong>.</li>
        <li>In  <strong>World Wide Web</strong>, web pages are considered to be the vertices. There is an edge from a page u to other page v if there is a link of page v on page u. This is an example of  <strong>Directed graph</strong>. It was the basic idea behind  <a href="https://www.geeksforgeeks.org/page-rank-algorithm-implementation/">Google Page Ranking Algorithm</a>.</li>
        <li>In  <strong>Operating System</strong>, we come across the Resource Allocation Graph where each process and resources are considered to be vertices. Edges are drawn from resources to the allocated process, or from requesting process to the requested resource. If this leads to any formation of a cycle then a deadlock will occur.</li>
      </ul>
      <h2 id="implementation-of-graph">Implementation of Graph</h2>
      <div data-pym-src="https://www.jdoodle.com/embed/v0/3eue"></div>
    </div>
  )
}
export default Graph;