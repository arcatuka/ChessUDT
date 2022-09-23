import Pieces from "./pieces.js"
class King extends Pieces{
    movement()
    {
        console.log("King is Moving");
    }
    eat()
    {
        console.log("King is taking a unit");
    }
}