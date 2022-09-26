class Bishop extends Piece {
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
    }

    findValidMove(rowList) {
        const leftDiagonalValidMove = this.findValidMoveOnLeftDiagonal(rowList)
        const rightDiagonalValidMove = this.findValidMoveOnRightDiagonal(rowList)
        return leftDiagonalValidMove.concat(rightDiagonalValidMove)
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

    validateMoveRange(squareList, pieceIndex) {
        // Limit two head of the list
        let leftLimit = 0
        let rightLimit = squareList.length - 1

        for (let index = 0 ; index < squareList.length ; ++index) {
            if (squareList[index].piece !== null && index !== pieceIndex) {
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