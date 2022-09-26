class Knight extends Piece {
    constructor(colIndex, rowIndex, name, color) {
        super(colIndex, rowIndex, name, color)
        this.availableMove = []
        // this.rowMovement = [-2, -2, -1, -1 , 1, 1, 2, 2]
        // this.colMovement = [-1 , 1, -2, 2, -2, 2, -1, 1]
    }

    findValidMove(rowList) {
        const squareList = []
        for (let rowIndex = 0 ; rowIndex < rowList.length ; ++rowIndex) {
            let colList = rowList[rowIndex].colList
            for (let colIndex = 0 ; colIndex < colList.length ; ++colIndex) {
                const rowDistanceValue = this.rowIndex - rowIndex
                const colDistanceValue = this.colIndex - colIndex
                const squareObject = rowList[rowIndex].colList[colIndex]
                const pieceObject = squareObject.piece
                //console.log(this.rowIndex+ " and "+ rowIndex)
                if ((rowDistanceValue===2 && colDistanceValue==1 || rowDistanceValue===2 && colDistanceValue==-1 || rowDistanceValue===1 && colDistanceValue==2 || rowDistanceValue===1 && colDistanceValue==-2 || rowDistanceValue==-2 && colDistanceValue==1 || rowDistanceValue===-2 && colDistanceValue==-1|| rowDistanceValue===-1 && colDistanceValue==-2|| rowDistanceValue===-1 && colDistanceValue==2) ) {
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
}