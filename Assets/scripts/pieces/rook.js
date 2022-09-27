class Rook extends Piece {
    constructor(colIndex, rowIndex, name, color) {
        super(colIndex, rowIndex, name, color)
        this.isFirstMove = true
    }
    
    findValidMove(rowList) {
        const findValidMoveOnRow = this.findValidMoveOnRow(rowList)
        const findValidMoveOnCol = this.findValidMoveOnCol(rowList)
        return findValidMoveOnRow.concat(findValidMoveOnCol)
    }

    findValidMoveOnRow(rowList) {
        const squareList = []
        const pieceList = []
            for (let colIndex = 0; colIndex < 8; ++colIndex) {
                    let square = rowList[this.rowIndex].colList[colIndex]
                    let piece = square.piece
                    squareList.push(square)
                    pieceList.push(piece)
            }
        const coreIndex = pieceList.indexOf(this)
        return this.validateMoveRange(squareList, coreIndex)
    }

    findValidMoveOnCol(rowList) {
        const squareList = []
        const pieceList = []
            for (let rowIndex = 0; rowIndex < 8; ++rowIndex) {
                       let colList = rowList[rowIndex].colList
                        let square = colList[this.colIndex]
                        let piece = square.piece
                        squareList.push(square)
                        pieceList.push(piece)
                       
                    
            }
            const pieceIndex = pieceList.indexOf(this)
            return this.validateMoveRange(squareList, pieceIndex)
        
    }

    validateMoveRange(squareList, pieceIndex) {
        // Limit two head of the list
        let leftLimit = 0                       //set giới hạn trái = 0
        let rightLimit = squareList.length - 1  // giới hạn phải sẽ bằng kích cỡ list - 1

        for (let index = 0 ; index < squareList.length ; ++index) {         
            if (squareList[index].piece !== null && index !== pieceIndex) {     //nếu trong ô có quân cờ và 
                let pieceElementColor = squareList[index].piece.color
                if (index < pieceIndex) {
                    // Because the slice method slice from a to b so if the color is ally it will count that spot too
                    leftLimit = pieceElementColor === this.color ? index + 1 : index
                } else {
                    // Because the slice method slice from a to b so if the color is ally it will count that spot too
                    rightLimit = pieceElementColor === this.color ? index -1 : index
                    break
                }
            }
        }

        squareList.splice(pieceIndex, 1)
        return squareList.slice(leftLimit, rightLimit)
    }
}