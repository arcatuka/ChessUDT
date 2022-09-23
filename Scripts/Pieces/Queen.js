import Pieces from "./pieces.js"
class Queen extends Pieces{
    movement()
    {
        console.log("Queen is Moving");
    }
    eat()
    {
        console.log("Queen is taking a unit");
    }
}
