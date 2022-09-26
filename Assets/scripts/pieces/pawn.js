class Pawn extends Piece {
<<<<<<< HEAD
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
=======
    // findMove(rowList) {
    //     for (let rowIndex = 0 ; rowIndex < rowList.length ; ++rowIndex) {
    //         let colList = rowList[rowIndex].colList
    //         for (let colIndex = 0 ; colIndex < colList.length ; ++colIndex) {
    //             const rowDistanceValue = Math.abs(this.rowIndex - rowIndex)
    //             const squareObject = rowList[rowIndex].colList[colIndex]
    //             const pieceObject = squareObject.piece

    //             if ((rowDistanceValue <= 2) && (colIndex === this.colIndex) && (pieceObject === null)) {
    //                 squareObject.squareElement.style.backgroundColor = 'red'
    //             }
    //         }
    //     }
    // }
>>>>>>> b073ded44372bf2ce78d65478f00f6314b52e835

    handleLeveling(rowList) {

    }
}