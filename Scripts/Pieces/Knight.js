import Pieces from "./pieces.js"
class Knight extends Pieces{
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
        console.log("Knight is Moving");
    }
    eat()
    {
        console.log("Knight is taking a unit");
    }
}