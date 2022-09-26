class Pawn extends Piece {
    constructor(colIndex, rowIndex, name, color) {
        super(colIndex, rowIndex, name, color)
        this.isFirstMove = true
        this.availableMove = []
        this.rowMovement = this.color === 'white' ? -1 : 1
        this.colMovement = [0, -1, 1]
    }

    findValidMove(rowList) {
        const squareList = []
        for (let index = 0 ; index < this.colMovement.length ; ++index) {
            let newRowIndex = this.rowIndex + this.rowMovement
            let newColIndex = this.colIndex + this.colMovement[index]
            if ((0 <= newRowIndex && newRowIndex <= 7) && (0 <= newColIndex && newColIndex <= 7)) {
                let square = rowList[newRowIndex].colList[newColIndex]
                let piece = square.piece
                if ((piece === null && newColIndex === this.colIndex)) {
                    squareList.push(square)
                }
                if ((piece !== null && piece.color !== this.color && newColIndex !== this.colIndex)) {
                    squareList.push(square)
                }
            }
        }
        return squareList
    }

    handleLeveling(rowList) {

    }
}