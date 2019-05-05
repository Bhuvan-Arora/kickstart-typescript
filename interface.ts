interface AutomobileInterface
{
    brand : string;
    speed : number;
    speedMethod(velocidad:number) : void;
}

//Implementing interface to object
const automobile: AutomobileInterface = 
{
    brand : "Mercedes",
    speed : 200,
    speedMethod()
    {
        console.log(`this ${this.brand} is going at ${this.speed} miles`);
    }
}

//Implementing interface to functions
function car1(automobile: AutomobileInterface)
{
    //automobile.speed = "blablabla"; //This will give error as interface restricted the type
    console.log(`this ${automobile.brand} is going at ${automobile.speed} miles`);
}

car1(automobile); //calling the function by passing automobile object

class AutomobileClass implements AutomobileInterface
{
    brand : string;
    speed: number;

    speedMethod(speed)
    {
        console.log(`HI, My car is going at ${speed}`);
    }
}

let carObject = new AutomobileClass();

carObject.speedMethod(1000);
