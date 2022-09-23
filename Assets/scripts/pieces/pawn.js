class Pawn extends Piece {
    isFirstMove = false;
    findValidMove(rowList) {
        for (let rowIndex = 0 ; rowIndex < rowList.length ; ++rowIndex) {
            let colList = rowList[rowIndex].colList
            for (let colIndex = 0 ; colIndex < colList.length ; ++colIndex) {
                const rowDistanceValue = this.rowIndex - rowIndex
                const squareObject = rowList[rowIndex].colList[colIndex]
                const pieceObject = squareObject.piece

                if ((rowDistanceValue <= 2 &&rowDistanceValue>0) && (colIndex === this.colIndex) && (pieceObject === null) && this.color=='white') {
                    squareObject.squareElement.style.backgroundColor = 'red'
                }
                if ((rowDistanceValue >= -2&&rowDistanceValue<0) && (colIndex === this.colIndex) && (pieceObject === null) && this.color=='black') {
                    squareObject.squareElement.style.backgroundColor = 'red'
                }
            }
            // const ColDistanceValue = Math.abs(this.rowIndex - rowIndex)
            // const squareObject = rowList[rowIndex].colList[colIndex]
            // const pieceObject = squareObject.piece
        }
    }
    RenderPieceElement(){}
    destroyPieceElement(){}
    handleLeveling() {}

}