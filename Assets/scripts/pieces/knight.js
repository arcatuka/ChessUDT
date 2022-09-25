class Knight extends Piece {
    findValidMove(rowList) {
        for (let rowIndex = 0 ; rowIndex < rowList.length ; ++rowIndex) {
            let colList = rowList[rowIndex].colList
            for (let colIndex = 0 ; colIndex < colList.length ; ++colIndex) {
                const rowDistanceValue = this.rowIndex - rowIndex
                const colDistanceValue = this.colIndex - colIndex
                const squareObject = rowList[rowIndex].colList[colIndex]
                const pieceObject = squareObject.piece
                //console.log(this.rowIndex+ " and "+ rowIndex)
                if ((rowDistanceValue===2 && colDistanceValue==1 || rowDistanceValue===2 && colDistanceValue==-1 || rowDistanceValue===1 && colDistanceValue==2 || rowDistanceValue===1 && colDistanceValue==-2 || rowDistanceValue==-2 && colDistanceValue==1 || rowDistanceValue===-2 && colDistanceValue==-1|| rowDistanceValue===-1 && colDistanceValue==-2|| rowDistanceValue===-1 && colDistanceValue==2) &&pieceObject=== null ) {
                    squareObject.squareElement.style.backgroundColor = 'red'
                }
            }
            
        }
    }
}