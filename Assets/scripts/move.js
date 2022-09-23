class Move {
    constructor() {
        this.currentPieceSelected = null
    }
    movePiece(oldCoordinate, newCoordinate, rowList) {
        const oldRowIndex = oldCoordinate[0]
        const oldColIndex = oldCoordinate[1]
        const oldSpot = rowList[oldRowIndex].colList[oldColIndex]

        const newRowIndex = newCoordinate[0]
        const newColIndex = newCoordinate[1]
        const newSpot = rowList[newRowIndex].colList[newColIndex]

        if (newSpot.piece !== null) {
            newSpot.piece.destroyPieceElement()
        }

        newSpot.piece = oldSpot.piece
        oldSpot.piece = null

        newSpot.piece.rowIndex = newRowIndex
        newSpot.piece.colIndex = newColIndex
    }

    changeValidSquaresColor(squareList) {
        for (let index = 0 ; index < squareList.length ; ++index) {
            const color = squareList[index].piece === null ? 'gray' : 'red'
            squareList[index].changeSquareElementColor(color)
        }
    }

    handlePieceSelected(pieceElement) {
        pieceElement.style.marginBottom = '10px'
        pieceElement.parentElement.style.backgroundColor = 'rgb(102, 205, 170)'
    }
}