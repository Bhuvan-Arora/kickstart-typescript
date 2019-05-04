let car =
{
    brand : "BMW",
    engine : 5.4,
    run : function()
    {
        console.log("I am running");
    }

}

//car.brand = 5; 
//This will give error
//Because typescript assumes data type of a variable or object from its initial value, Here the initial value of brand is string