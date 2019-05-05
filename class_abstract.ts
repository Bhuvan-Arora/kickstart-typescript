abstract class People
{
    displayDate()
    {
        console.log("Some Data");
    }
}

class Kids extends People
{}

//let peopleObj = new People(); //Error - You shouldn't able to create instance of abstract class;
let kidsObj = new Kids();
kidsObj.displayDate();