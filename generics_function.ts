//Generic gives the flexibility to function caller that which type of data he/she want to pass in a function

function displayData<TYPE>(data:TYPE)
{
    let someOtherData : TYPE;
    return data;
}

console.log(displayData(123));
// data in this will be number type further