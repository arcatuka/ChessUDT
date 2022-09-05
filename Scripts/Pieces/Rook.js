import Pieces from "./pieces.js"
class Rook extends Pieces{
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
        console.log("Rook is Moving");
    }
    eat()
    {
        console.log("Rook is Moving");
    }
}

var a = new Rook("hi","cc","whites");
console.log(a.info.color);
