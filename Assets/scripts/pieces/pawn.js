class Pawn extends Piece {
    constructor(name, color) {
        super(name, color)
        this.firstMove = true
        this.yMove = this.color === 'black' ? 1 : -1
    }
    canMove(x, y, object) {
        
    }
}