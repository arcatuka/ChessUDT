class Rook{
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

class Bishop{
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
        console.log("Bishop is Moving");
    }
    eat()
    {
        console.log("Bishop is taking a unit");
    }
}

class Knight{
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
        console.log("Knight is Moving");
    }
    eat()
    {
        console.log("Knight is taking a unit");
    }
}
class Queen{
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
        console.log("Queen is Moving");
    }
    eat()
    {
        console.log("Queen is taking a unit");
    }
}

class King{
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
        console.log("King is Moving");
    }
    eat()
    {
        console.log("King is taking a unit");
    }
}

class Pawn{
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
        console.log("Pawn is Moving");
    }
    eat()
    {
        console.log("Pawn is taking a unit");
    }
}

