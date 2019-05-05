"use strict";
//Method 1 of importing Things
//import Object = require("./module_external");
exports.__esModule = true;
//Method 2 of importing Things
//import * as Object from "./module_external";
//console.log(Object.displayData("Hey !!, This is really cool."));
//Method 3 of importing Things
var module_external_1 = require("./module_external");
console.log(module_external_1.displayData("Hey !!, This is really cool."));
