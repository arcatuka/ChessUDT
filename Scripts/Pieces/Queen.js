import Pieces from "./pieces.js"
class Queen extends Pieces{
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
        console.log("Queen is Moving");
    }
    eat()
    {
        console.log("Queen is taking a unit");
    }
}
