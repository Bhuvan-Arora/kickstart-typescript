var brand;
var engine;
var isFast;
var ownerName;
brand = "BMW"; //String
engine = 5.4; //Number
isFast = true; //Boolean
ownerName = 4; //Any
ownerName = "Bhuvan Arora"; //Any
var cars = ["Toyoto", "BMW", "Mercedes"]; //Array of string
cars = ["Nisaan"]; //Array of string
var cars2 = ["Toyoto", 1, true]; //Array of any
cars = ["Nisaan"]; //Array of any
function calc(val1, val2) {
    var total = val1 + val2;
    return total;
}
calc(2, 2);
var universal; //type of variable is function : return type number
universal = calc; //assigning function to variable
//object type
var vehicle = {
    brand: "Mecedes",
    engine: 4.4
};
var motorCar; //Union type
motorCar = 5;
motorCar = "string";
