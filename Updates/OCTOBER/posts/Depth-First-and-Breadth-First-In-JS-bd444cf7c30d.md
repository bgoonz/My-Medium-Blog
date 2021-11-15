Depth-First and Breadth-First In JS
===================================

are two classic traversal strategies that differ in the order nodes are hit.

------------------------------------------------------------------------

### Depth-First and Breadth-First In JS

#### are two classic traversal strategies that differ in the order nodes are hit.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*0PsVCrmAbxw9h0-p.png" alt="Example we will be using" class="graf-image" /><figcaption>Example we will be using</figcaption></figure>Like we are accustomed to, we can represent the tree programmatically with:

    class TreeNode {
            constructor(val) {
                this.val = val;
                this.left = null;
                this.right = null;
            }
        }
        
        let a = new TreeNode('a');
        let b = new TreeNode('b');
        let c = new TreeNode('c');
        let d = new TreeNode('d');
        let e = new TreeNode('e');
        let f = new TreeNode('f');
        
        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;

<a href="https://gist.github.com/bgoonz/0a9a307a896aa5f56e43dd086b2a4457" class="markup--anchor markup--p-anchor">https://gist.github.com/bgoonz/0a9a307a896aa5f56e43dd086b2a4457</a>

### Depth-First

<figure><img src="https://cdn-images-1.medium.com/max/600/0*I1o42aaViXOWQy4a.gif" class="graf-image" /></figure>To help verbalize Depth-First (DF), we’ll be using a few familial terms to describe the relative positions of the nodes. Think of the words you would use if viewing a family tree!

<figure><img src="https://cdn-images-1.medium.com/max/800/0*0PsVCrmAbxw9h0-p.png" alt="Example we will be using" class="graf-image" /><figcaption>Example we will be using</figcaption></figure>#### **examples**:

-   <span id="c539">`B` and `C` are siblings</span>
-   <span id="dcaf">`D` and `E` are descendants of `B`</span>
-   <span id="7974">`B`, `C`, `D`, `E`, `F` are all descendants of `A`</span>

A Depth-First traversal will continually travel deeper into a tree before switching branches. This means that, given a node, we must visit all of it’s descendants before visiting it’s sibling.

Performing DF on our tree will hit the nodes in the order: `A, B, D, E, C, F`

### Depth-First Implementation

To travel the nodes of a tree according to Depth-First behavior, we’ll utilize a **stack.** Recall from earlier that a stack is LIFO (Last In, First Out). Our strategy is to use an array as a stack. We’ll use `push` to add to the top of our stack and `pop` to remove the top. Below is a complete implementation of `depthFirst`. Try to interpret the code below and scroll further to see the annotated version:

For now, a key idea to take away is that we only consider a node “visited” once we pop it. We do not consider a node “visited” when we push it.

Because a stack naturally leads to DF order on a tree, we can easily write a recursive version. Why is recursion relevant to DF? Recursion utilizies the call **stack**:

Does this code look familiar? It’s identical to the `preOrderPrint` function we wrote previously. That's right, pre-order and depth-first are identical tree node orderings.

You should study both the iterative and recursive implementations as they will both prove valuable to solving problems.

### Breadth-First

<figure><img src="https://cdn-images-1.medium.com/max/600/0*ft65BcmA-tc432xZ.gif" class="graf-image" /></figure>The word “breadth” is the same as “width”. To help verbalize Breadth-First (BF) we’ll need to understand the simple concept of tree **levels**. With the tree at the top of this reading in mind, we can say the following:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*0PsVCrmAbxw9h0-p.png" alt="Example we will be using" class="graf-image" /><figcaption>Example we will be using</figcaption></figure>-   <span id="8d92">***level 0 contains*** `A`</span>
-   <span id="e59d">***level 1 contains*** `B`***,*** `C`</span>
-   <span id="4363">***level 2 contains*** `D`***,*** `E`***,*** `F`</span>

A Breadth-First traversal will visit all nodes across a level, before moving to the next level. This means we travel laterally as much as we can before going deeper into the tree.

Perform BF on our tree will hit the nodes in the order: `A, B, C, D, E, F`

### Breadth-First Implementation

While DF uses a stack, BF will use a **queue**. Recall that a queue is FIFO (First In, First Out). The code is very similar to our iterative DF, except we will use an array as a queue. `shift` will remove the front of the queue and `push` will add to the back of the queue. Interpret the implementation below and scroll further to the annotated version when you need more insight:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*0PsVCrmAbxw9h0-p.png" alt="Example we will be using" class="graf-image" /><figcaption>Example we will be using</figcaption></figure>We’ll rarely run into a recursive BF implementation (probably never) because recursion uses an underlying call stack, but we really want the opposite of a stack (a queue).

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [October 2, 2021](https://medium.com/p/bd444cf7c30d).

<a href="https://medium.com/@bryanguner/depth-first-and-breadth-first-in-js-bd444cf7c30d" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on October 14, 2021.
