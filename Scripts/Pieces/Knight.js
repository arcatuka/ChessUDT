import Pieces from "./pieces.js"
class Knight extends Pieces{
    movement()
    {
        console.log("Knight is Moving");
    }
    eat()
    {
        console.log("Knight is taking a unit");
    }
}