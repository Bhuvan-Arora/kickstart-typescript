let brand : string;
let engine : number;
let isFast : boolean;
let  ownerName : any;

brand = "BMW"; //String
engine = 5.4; //Number
isFast = true; //Boolean

ownerName = 4; //Any
ownerName = "Bhuvan Arora"; //Any

let cars : string[] = ["Toyoto", "BMW", "Mercedes"]; //Array of string
cars = ["Nisaan"]; //Array of string

let cars2 : any[] = ["Toyoto", 1, true]; //Array of any
cars = ["Nisaan"]; //Array of any

function calc(val1:number, val2:number) :number //return value must be number
{
    let total: number = val1 + val2;

    return total;
}

calc(2,2);

let universal : (value1:number, value2:number)=>number; //type of variable is function : return type number

universal = calc; //assigning function to variable

//object type
let vehicle: {brand:string, engine:number} = 
{
    brand: "Mecedes",
    engine: 4.4
};

let motorCar : string | number; //Union type

motorCar = 5;
motorCar = "string";