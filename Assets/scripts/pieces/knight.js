class Knight extends Piece {
    findValidMove(rowList) {
        for (let rowIndex = 0 ; rowIndex < rowList.length ; ++rowIndex) {
            let colList = rowList[rowIndex].colList
            for (let colIndex = 0 ; colIndex < colList.length ; ++colIndex) {
                const Xposleft = this.rowIndex - rowIndex
                const Xposright =this.rowIndex + rowIndex
                const Yposleft = this.colIndex - colIndex
                const Yposright = this.colIndex + colIndex
                const squareObject = rowList[rowIndex].colList[colIndex]
                const pieceObject = squareObject.piece
                //console.log(this.rowIndex+ " and "+ rowIndex)
                if ((Xposleft===2 && Yposleft==1 || Xposleft===2 && Yposleft==-1 || Xposleft===1 && Yposleft==2 || Xposleft===1 && Yposleft==-2 || Xposleft==-2 && Yposleft==1 || Xposleft===-2 && Yposleft==-1|| Xposleft===-1 && Yposleft==-2|| Xposleft===-1 && Yposleft==2) &&pieceObject=== null ) {
                    squareObject.squareElement.style.backgroundColor = 'red'
                }
            }
            
        }
    }
}