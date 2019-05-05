//we can extend the type with interface or any other data types known as generic constraints
class objectGenericClass<TYPE1, TYPE2 extends string> // second type must be always string
{
    constructor(public data1:TYPE1, public data2:TYPE2)
    {
        console.log(data1, data2);
    }
}

let object1 = new objectGenericClass<string, string>("abc", "dfd"); //User can define the type here
let object2 = new objectGenericClass<boolean, string>(true, "rfc"); //User can define the type here

let array1 : number[] = [1, 2, 3];
let array2 : Array<number> = [1, 2, 3];
//Both the above lines are same