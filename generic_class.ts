class objectGenericClass<TYPE1, TYPE2>
{
    constructor(public data1:TYPE1, public data2:TYPE2)
    {
        console.log(data1, data2);
    }
}

let object1 = new objectGenericClass<string, number>("abc", 123); //User can define the type here
let object2 = new objectGenericClass<boolean, string>(true, "rfc"); //User can define the type here

let array1 : number[] = [1, 2, 3];
let array2 : Array<number> = [1, 2, 3];
//Both the above lines are same