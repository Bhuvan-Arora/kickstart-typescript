var Tree = /** @class */ (function () {
    //-------------- Way 1--------------------
    // branch : string;
    // constructor(branch)
    // {
    //     this.branch = branch;
    // }
    //----------------- way 2--------------
    function Tree(leaf) {
        this.leaf = leaf;
        this.leaf = leaf;
    }
    Tree.prototype.moveLeaf = function () {
        console.log("Leaf is moving");
    };
    return Tree;
}());
var tree1 = new Tree("Green Leaf");
tree1.moveLeaf();
