class King extends Piece {
    constructor(colIndex, rowIndex, name, color) {
        super(colIndex, rowIndex, name, color)
        this.isFirstMove = true
        this.availableMove = []
        // this.rowMovement = [1, 1, -1, -1, 1, -1, 0, 0]
        // this.colMovement = [-1, 1, -1, 1, 0, 0, 1, -1]
    }

    findValidMove(rowList) {
        const squareList = []
        for (let rowIndex = 0 ; rowIndex < rowList.length ; ++rowIndex) {
            let colList = rowList[rowIndex].colList
            for (let colIndex = 0 ; colIndex < colList.length ; ++colIndex) {
                const RowDistanceValue = Math.abs(this.rowIndex - rowIndex)
                const ColDistanceValue = Math.abs(this.colIndex - colIndex)
                const squareObject = rowList[rowIndex].colList[colIndex]
                const pieceObject = squareObject.piece
                //console.log(this.rowIndex+ " and "+ rowIndex)
                if (((RowDistanceValue <= 1) && (colIndex === this.colIndex))||((ColDistanceValue <= 1) && (rowIndex === this.rowIndex))) {
                    //squareObject.squareElement.style.backgroundColor = 'red'
                    if(pieceObject === null)
                        squareList.push(squareObject)
                    else if(pieceObject.color =='black'){
                        squareObject.squareElement.style.backgroundColor = 'red'
                        //squareList.push(squareObject)
                    }
                }
            }
            
        }
        return squareList
    }

    handleCastling(squareList) {

    }

    checkPiecesInBetween(squareList) {

    }

    checkRookFirstMove(squareObject) {

    }
}