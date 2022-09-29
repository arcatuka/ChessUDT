class Queen extends Piece {
    constructor(colIndex, rowIndex, name, color) {
        super(colIndex, rowIndex, name, color)
        this.availableMove = [
            [-7, -7],
            [-6, -6],
            [-5, -5],
            [-4, -4],
            [-3, -3],
            [-2, -2],
            [-1, -1],
            [0, 0],
            [1, 1],
            [2, 2],
            [3, 3],
            [4, 4],
            [5, 5],
            [6, 6],
            [7, 7],
            
            [-7, 7],
            [-6, 6],
            [-5, 5],
            [-4, 4],
            [-3, 3],
            [-2, 2],
            [-1, 1],
            [0, 0],
            [1, -1],
            [2, -2],
            [3, -3],
            [4, -4],
            [5, -5],
            [6, -6],
            [7, -7]
        ]
        // this.rowMovement = [-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
        // this.colMovement = [-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
        // this.reverseColMovement = [7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7]
    }

    findValidMove(rowList) {
        const leftDiagonalValidMove = this.findValidMoveOnLeftDiagonal(rowList)
        const rightDiagonalValidMove = this.findValidMoveOnRightDiagonal(rowList)
        let checkDiagonal= leftDiagonalValidMove.concat(rightDiagonalValidMove)
        const findValidMoveOnRow = this.findValidMoveOnRow(rowList)
        const findValidMoveOnCol = this.findValidMoveOnCol(rowList)
        let rowAnhCol= findValidMoveOnRow.concat(findValidMoveOnCol)
        return checkDiagonal.concat(rowAnhCol)
    }
    
    findValidMoveOnLeftDiagonal(rowList) {
        const squareList = []
        const pieceList = []
        for (let index = 0 ; index <= 14 ; ++index) {
            let newRowIndex = this.rowIndex + this.availableMove[index][0]
            let newColIndex = this.colIndex + this.availableMove[index][1]
            if ((0 <= newRowIndex && newRowIndex <= 7) && (0 <= newColIndex && newColIndex <= 7)) {
                let square = rowList[newRowIndex].colList[newColIndex]
                let piece = square.piece
                squareList.push(square)
                pieceList.push(piece)
            }
        }
        const coreIndex = pieceList.indexOf(this)
        return this.validateMoveRange(squareList, coreIndex)
    }
    
    findValidMoveOnRightDiagonal(rowList) {
        const squareList = []
        const pieceList = []
        for (let index = 15 ; index <= 28 ; ++index) {
            let newRowIndex = this.rowIndex + this.availableMove[index][0]
            let newColIndex = this.colIndex + this.availableMove[index][1]
            if ((0 <= newRowIndex && newRowIndex <= 7) && (0 <= newColIndex && newColIndex <= 7)) {
                let square = rowList[newRowIndex].colList[newColIndex]
                let piece = square.piece
                squareList.push(square)
                pieceList.push(piece)
            }
        }
        console.log(squareList)
        const pieceIndex = pieceList.indexOf(this)
        return this.validateMoveRange(squareList, pieceIndex)
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