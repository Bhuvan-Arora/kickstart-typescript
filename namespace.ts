///<reference path="module1.ts" />

console.log(myNameSpace.displayData())
console.log(myNameSpace.userName);

//If you simply compile this file into js typescript will not import namespace for you
//To import namespace you have to compile the file with following command
// tsc namespace --outFile namespace.js