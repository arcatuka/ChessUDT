class Board {
    constructor() {
        this.rows = 8
        this.cols = 8
        this.rowList = []
        this.currentPieceSelected = null
    }

    initialize() {
        for (let rowIndex = 0 ; rowIndex < this.rows ; ++rowIndex) {
            const row = new Row()
            for (let colIndex = 0 ; colIndex < this.cols ; ++colIndex) {
                const squareColor  = (colIndex + rowIndex) % 2 === 0 ? '#faf5de' : '#e1dbb5'
                const square = new Square(colIndex, rowIndex, squareColor, null)
                if (rowIndex === 1) {
                    square.piece = new Pawn(colIndex, rowIndex, 'pawn', 'black')
                }

                if (rowIndex === 6) {
                    square.piece = new Pawn(colIndex, rowIndex, 'pawn', 'white')
                }
                row.colList.push(square)
            }
            this.rowList.push(row)
        }

        // Create black rook
        this.rowList[0].colList[0].piece = new Rook(0, 0, 'rook', 'black')

        this.rowList[0].colList[7].piece = new Rook(7, 0, 'rook', 'black')

        // Create white rook
        this.rowList[7].colList[0].piece = new Rook(0, 7, 'rook', 'white')

        this.rowList[7].colList[7].piece = new Rook(7, 7, 'rook', 'white')

        // Create black knight
        this.rowList[0].colList[1].piece = new Knight(1, 0, 'knight', 'black')

        this.rowList[0].colList[6].piece = new Knight(6, 0, 'knight', 'black')

        // Create white knight
        this.rowList[7].colList[1].piece = new Knight(1, 7, 'knight', 'white')

        this.rowList[7].colList[6].piece = new Knight(6, 7, 'knight', 'white')
        
        // Create black bishop
        this.rowList[0].colList[2].piece = new Bishop(2, 0, 'bishop', 'black')

        this.rowList[0].colList[5].piece = new Bishop(5, 0, 'bishop', 'black')

        // Create white bishop
        this.rowList[7].colList[2].piece = new Bishop(2, 7, 'bishop', 'white')

        this.rowList[7].colList[5].piece = new Bishop(5, 7, 'bishop', 'white')

        // Create queen
        this.rowList[0].colList[3].piece = new Queen(3, 0, 'queen', 'black')

        this.rowList[7].colList[3].piece = new Queen(3, 7, 'queen', 'white')

        // Create king
        this.rowList[0].colList[4].piece = new King(4, 0, 'king', 'black')

        this.rowList[7].colList[4].piece = new King(4, 7, 'king', 'white')

    }

    renderChessBoard() {
        const boardElement = document.getElementById('chess-board')
        for (let rowIndex = 0 ; rowIndex < this.rows ; ++rowIndex) {
            const row = this.rowList[rowIndex]
            const rowElement = row.renderRowElement()
            for (let colIndex = 0 ; colIndex < this.cols ; ++colIndex) {
                const square = row.colList[colIndex]
                const squareElement = square.renderSquareElement()
                if (square.piece !== null) {
                    const pieceElement = square.piece.renderPieceElement()
                    squareElement.appendChild(pieceElement)
                }
                rowElement.appendChild(squareElement)
            }
            boardElement.appendChild(rowElement)
        }
    }

    addInitEvents() {
        const rowList = this.rowList
        const deselectedAll = new CustomEvent('deselectedAll', {
            detail: {
                board: this
            }
        })

        document.addEventListener('deselectedAll', function(event) {
            event.detail.board.renderChessBoard()
        })

        const pieceElementList = document.getElementsByClassName('piece')
        const squareElementList = document.getElementsByClassName('square')

        for (let index = 0; index < pieceElementList.length ; ++index) {
            pieceElementList[index].addEventListener('click', function(event) {
                const squareElementColor = event.target.parentElement.style.backgroundColor
                if (squareElementColor !== 'red') {
                    document.dispatchEvent(deselectedAll)
                    const piece = event.target.attributes.data
                    const validMoves = piece.findValidMove(rowList)
                    move.handlePieceSelected(event.target)
                    move.currentPieceSelected = piece
                    move.changeValidSquaresColor(validMoves)
                }
            })
        }

        for (let index = 0; index < squareElementList.length ; ++index) {
            squareElementList[index].addEventListener('click', function(event) {
                // if the valid square is the enemy the event.target will be the img not the div
                // so that we assign the square element to a variable when defined the event
                const squareElement = squareElementList[index]
                const square = squareElement.attributes.data
                const squareElementColor = squareElement.style.backgroundColor
                if (squareElementColor === 'red' || squareElementColor === 'gray') {
                    const newCoordinate = [square.rowIndex, square.colIndex]
                    const currentPiece = move.currentPieceSelected
                    const oldCoordinate = [currentPiece.rowIndex, currentPiece.colIndex]
                    move.movePiece(oldCoordinate, newCoordinate, rowList)
                    move.currentPieceSelected = null
                    document.dispatchEvent(deselectedAll)
                }
            })
        }
    }    
}