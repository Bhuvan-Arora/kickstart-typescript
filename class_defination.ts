class Tree
{
    //-------------- Way 1--------------------
    // branch : string;
    // constructor(branch)
    // {
    //     this.branch = branch;
    // }

    //----------------- way 2--------------
    constructor(private leaf:string)
    {
        this.leaf = leaf;
    }

    moveLeaf()
    {
        console.log(`${this.leaf} is moving to right`);
    }
}

let tree1 = new Tree("Green Leaf");
tree1.moveLeaf();

//tree1.leaf = "Yellow Leave"; //Error because leaf is private