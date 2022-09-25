class Board {
    constructor() {
        this.rows = 8
        this.cols = 8
        this.rowList = []
        this.currentPieceSelected= Piece
    }

    initialize() {
        // Create squares object and pieces object
        for (let rowIndex = 0 ; rowIndex < this.rows ; ++rowIndex) {
            const rowObject = new Row()
            rowObject.renderRowElement()
            for (let colIndex = 0 ; colIndex < this.cols ; ++colIndex) {
                const squareColor  = (colIndex + rowIndex) % 2 === 0 ? '#faf5de' : '#e1dbb5'
                const squareObject = new Square(squareColor, null)
                squareObject.renderSquareElement()
                if (rowIndex === 1) {
                    squareObject.piece = new Pawn(colIndex, rowIndex, 'pawn', 'black')
                    squareObject.piece.renderPieceElement()
                }

                if (rowIndex === 6) {
                    squareObject.piece = new Pawn(colIndex, rowIndex, 'pawn', 'white')
                    squareObject.piece.renderPieceElement()
                }
                rowObject.colList.push(squareObject)
            }
            this.rowList.push(rowObject)
        }

        // Create black rook
        // this.rowList[0].colList[0].piece = new Rook(0, 0, 'rook', 'black')
        // this.rowList[0].colList[0].piece.renderPieceElement()

        // this.rowList[0].colList[7].piece = new Rook(7, 0, 'rook', 'black')
        // this.rowList[0].colList[7].piece.renderPieceElement()

        // // Create white rook
        // this.rowList[7].colList[0].piece = new Rook(0, 7, 'rook', 'white')
        // this.rowList[7].colList[0].piece.renderPieceElement()

        // this.rowList[7].colList[7].piece = new Rook(7, 7, 'rook', 'white')
        // this.rowList[7].colList[7].piece.renderPieceElement()

        //Create black knight
        this.rowList[0].colList[1].piece = new Knight(1, 0, 'knight', 'black')
        this.rowList[0].colList[1].piece.renderPieceElement()

        this.rowList[0].colList[6].piece = new Knight(6, 0, 'knight', 'black')
        this.rowList[0].colList[6].piece.renderPieceElement()

        // Create white knight
        this.rowList[7].colList[1].piece = new Knight(1, 7, 'knight', 'white')
        this.rowList[7].colList[1].piece.renderPieceElement()

        this.rowList[7].colList[6].piece = new Knight(6, 7, 'knight', 'white')
        this.rowList[7].colList[6].piece.renderPieceElement()
        
        // // Create black bishop
        // this.rowList[0].colList[2].piece = new Bishop(2, 0, 'bishop', 'black')
        // this.rowList[0].colList[2].piece.renderPieceElement()

        // this.rowList[0].colList[5].piece = new Bishop(5, 0, 'bishop', 'black')
        // this.rowList[0].colList[5].piece.renderPieceElement()

        // // Create white bishop
        // this.rowList[7].colList[2].piece = new Bishop(2, 7, 'bishop', 'white')
        // this.rowList[7].colList[2].piece.renderPieceElement()

        // this.rowList[7].colList[5].piece = new Bishop(5, 7, 'bishop', 'white')
        // this.rowList[7].colList[5].piece.renderPieceElement()

        // // Create queen
        // this.rowList[0].colList[3].piece = new Queen(3, 0, 'queen', 'black')
        // this.rowList[0].colList[3].piece.renderPieceElement()

        // this.rowList[7].colList[3].piece = new Queen(3, 7, 'queen', 'white')
        // this.rowList[7].colList[3].piece.renderPieceElement()

        // Create king
        // this.rowList[0].colList[4].piece = new King(4, 0, 'king', 'black')
        // this.rowList[0].colList[4].piece.renderPieceElement()

        // this.rowList[7].colList[4].piece = new King(4, 7, 'king', 'white')
        // this.rowList[7].colList[4].piece.renderPieceElement()

        return this.rowList
    }

    renderChessBoard() {
        const boardElement = document.getElementById('chess-board')
        for (let rowIndex = 0 ; rowIndex < this.rows ; ++rowIndex) {
            const rowObject = this.rowList[rowIndex]
            const rowElement = rowObject.rowElement

            for (let colIndex = 0 ; colIndex < this.cols ; ++colIndex) {
                const squareObject = rowObject.colList[colIndex]
                const squareElement = squareObject.squareElement
                squareElement.style.backgroundColor = squareObject.color
                console.log
                const pieceOject = squareObject.piece
                if (pieceOject !== null) {
                    const pieceElement = pieceOject.pieceElement
                    squareElement.appendChild(pieceElement)
                }
                rowElement.appendChild(squareElement)
            }
            boardElement.appendChild(rowElement)
        }
    }

    addMoveEvent(){}

    movePiece(oldCoordinate, newCoordinate){}
    changeVaidSquaresColor(squareList){}
    handlePieceSelected(piece){}

}

