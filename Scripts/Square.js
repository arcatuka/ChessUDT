class Square{
    constructor(BoardPosition,color,piece)
    {
        this.BoardPosition=BoardPosition;
        this.color=color;
        this.piece=piece;
        this.info = {
            PlayerMoving: false,
            EnemyMoving:false,
            //isCastle:false, //King castle
        }
    }
    Init(){
        
    }

    CreateUnit(){
        //spawn unit
    }

    PieceMovementEvent(){
        //action when player clicks on square
    }
}