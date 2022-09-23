class King extends Piece {
    constructor(colIndex, rowIndex, name, color) {
        super(colIndex, rowIndex, name, color)
        this.isFirstMove = true
        this.availableMove = []
        // this.rowMovement = [1, 1, -1, -1, 1, -1, 0, 0]
        // this.colMovement = [-1, 1, -1, 1, 0, 0, 1, -1]
    }

    findValidMove(rowList) {
        
    }

    handleCastling(squareList) {

    }

    checkPiecesInBetween(squareList) {

    }

    checkRookFirstMove(squareObject) {

    }
}