class Knight extends Piece {
    constructor(colIndex, rowIndex, name, color) {
        super(colIndex, rowIndex, name, color)
        this.availableMove = []
        // this.rowMovement = [-2, -2, -1, -1 , 1, 1, 2, 2]
        // this.colMovement = [-1 , 1, -2, 2, -2, 2, -1, 1]
    }

    findValidMove(rowList) {
       
    }
}