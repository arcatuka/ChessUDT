import Pieces from "./pieces.js"
class Bishop extends Pieces{
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
        console.log("Bishop is Moving");
    }
    eat()
    {
        console.log("Bishop is taking a unit");
    }
}