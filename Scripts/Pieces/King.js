import Pieces from "./pieces.js"
class King extends Pieces{
    // constructor(UnitName,player,color){
    //     super();
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
        console.log("King is Moving");
    }
    eat()
    {
        console.log("King is taking a unit");
    }
}