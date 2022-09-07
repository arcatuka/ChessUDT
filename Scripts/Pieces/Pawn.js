import Pieces from "./pieces.js"
class Pawn extends Pieces{
    movement()
    {
        console.log("Pawn is Moving");
    }
    eat()
    {
        console.log("Pawn is taking a unit");
    }
}

var a = new Pawn("hello","k","da");
console.log(a.player);