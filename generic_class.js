var objectGenericClass = /** @class */ (function () {
    function objectGenericClass(data1, data2) {
        this.data1 = data1;
        this.data2 = data2;
        console.log(data1, data2);
    }
    return objectGenericClass;
}());
var object1 = new objectGenericClass("abc", 123); //User can define the type here
var object2 = new objectGenericClass(true, "rfc"); //User can define the type here
var array1 = [1, 2, 3];
var array2 = [1, 2, 3];
//Both the above lines are same
