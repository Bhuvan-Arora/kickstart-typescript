//Method 1 of importing Things
//import Object = require("./module_external");

//Method 2 of importing Things
//import * as Object from "./module_external";
//console.log(Object.displayData("Hey !!, This is really cool."));

//Method 3 of importing Things
import {displayData, userName} from "./module_external";
console.log(displayData("Hey !!, This is really cool."));