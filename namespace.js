//Namespace is just a container to make your code clean and seprate
var myNameSpace;
(function (myNameSpace) {
    myNameSpace.userName = "Bhuvan Arora";
    function displayData() {
        return "Hi, My name is Bhuvan !!";
    }
    myNameSpace.displayData = displayData;
})(myNameSpace || (myNameSpace = {}));
///<reference path="module1.ts" />
console.log(myNameSpace.displayData());
console.log(myNameSpace.userName);
//If you simply compile this file into js typescript will not import namespace for you
//To import namespace you have to compile the file with following command
// tsc namespace --outFile namespace.js
