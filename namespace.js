//Namespace is just a container to make your code clean and seprate
var myNameSpace;
(function (myNameSpace) {
    myNameSpace.userName = "Bhuvan Arora";
    function displayData() {
        return "Hi, My name is Bhuvan !!";
    }
    myNameSpace.displayData = displayData;
})(myNameSpace || (myNameSpace = {}));
console.log(myNameSpace.displayData());
console.log(myNameSpace.userName);
