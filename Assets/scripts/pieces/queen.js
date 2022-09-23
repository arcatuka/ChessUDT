class Queen extends Piece {
    constructor(colIndex, rowIndex, name, color) {
        super(colIndex, rowIndex, name, color)
        this.availableMove = []
        // this.rowMovement = [-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
        // this.colMovement = [-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
        // this.reverseColMovement = [7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7]
    }

    findValidMove(rowList) {

    }
    
    findValidMoveOnLeftDiagonal(rowList) {

    }
    
    findValidMoveOnRightDiagonal(rowList) {

    }

    findValidMoveOnRow(rowList) {

    }

    findValidMoveOnCol(rowList) {

    }

    validateMoveRange(squareList, pieceIndex) {

    }
}