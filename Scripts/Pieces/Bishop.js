import Pieces from "./pieces.js"
class Bishop extends Pieces{
    movement()
    {
        console.log("Bishop is Moving");
    }
    eat()
    {
        console.log("Bishop is taking a unit");
    }
}