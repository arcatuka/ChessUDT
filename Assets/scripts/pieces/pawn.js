class Pawn extends Piece {
    findMove(rowList) {
        for (let rowIndex = 0 ; rowIndex < rowList.length ; ++rowIndex) {
            let colList = rowList[rowIndex].colList
            for (let colIndex = 0 ; colIndex < colList.length ; ++colIndex) {
                const rowDistanceValue = Math.abs(this.rowIndex - rowIndex)
                const squareObject = rowList[rowIndex].colList[colIndex]
                const pieceObject = squareObject.piece

                if ((rowDistanceValue <= 2) && (colIndex === this.colIndex) && (pieceObject === null)) {
                    squareObject.squareElement.style.backgroundColor = 'red'
                }
            }
        }
    }
}