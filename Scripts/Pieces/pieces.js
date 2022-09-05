export default class Pieces{
    constructor(UnitName,player,color){
        this.info=
        {
            UnitName:UnitName,
            color: color,
            isTaken : false,
            urlUnit:null,
        }
        this.player = player;
    }
    movement()
    {
        console.log("Rook is Moving");
    }
    eat()
    {
        console.log("Rook is Moving");
    }
}







