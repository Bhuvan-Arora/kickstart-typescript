//Implementing interface to object
var automobile = {
    brand: "Mercedes",
    speed: 200,
    speedMethod: function () {
        console.log("this " + this.brand + " is going at " + this.speed + " miles");
    }
};
//Implementing interface to functions
function car1(automobile) {
    //automobile.speed = "blablabla"; //This will give error as interface restricted the type
    console.log("this " + automobile.brand + " is going at " + automobile.speed + " miles");
}
car1(automobile); //calling the function by passing automobile object
var AutomobileClass = /** @class */ (function () {
    function AutomobileClass() {
    }
    AutomobileClass.prototype.speedMethod = function (speed) {
        console.log("HI, My car is going at " + speed);
    };
    return AutomobileClass;
}());
var carObject = new AutomobileClass();
carObject.speedMethod(1000);
