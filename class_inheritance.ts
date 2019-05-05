class Building
{
    windows: string = "window 1";
    escalator()
    {
        console.log("The escalator is moving");
    }
}

class Building2 extends Building
{
    escalator()  //Method overriden
    {
        console.log("The escalator is moving from building 2");
    }
}

const building2 = new Building2();
building2.escalator();