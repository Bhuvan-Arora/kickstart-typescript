///<reference path="module1.ts" />

import thisSpace = myNameSpace.displayData;

console.log(thisSpace);
console.log(myNameSpace.userName);

//If you simply compile this file into js typescript will not import namespace for you
//To import namespace you have to compile the file with following command
// tsc namespace --outFile namespace.js