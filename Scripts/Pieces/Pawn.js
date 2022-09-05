import Pieces from "./pieces.js"
class Pawn extends Pieces{
    // constructor(UnitName,player,color){
    //     this.info=
    //     {
    //         UnitName:UnitName,
    //         color: color,
    //         isTaken : false,
    //         urlUnit:null,
    //     }
    //     this.player = player;
        
    // }
    movement()
    {
        console.log("Pawn is Moving");
    }
    eat()
    {
        console.log("Pawn is taking a unit");
    }
}