class Board {
    constructor() {
        this.rows = 8
        this.cols = 8
        this.rowList = []
    }

    init() {
        // Create squares object and pieces object
        for (let rowIndex = 0 ; rowIndex < this.rows ; ++rowIndex) {
            const rowObject = new Row()
            for (let colIndex = 0 ; colIndex < this.cols ; ++colIndex) {
                const squareColor  = (colIndex + rowIndex) % 2 === 0 ? 'light' : 'dark'
                const squareObject = new Square(squareColor, null)
                
                if (rowIndex === 1) {
                    squareObject.piece = new Pawn('pawn', 'black')
                }

                if (rowIndex === 6) {
                    squareObject.piece = new Pawn('pawn', 'white')
                }
                rowObject.colList.push(squareObject)
            }
            this.rowList.push(rowObject)
        }

        // Create black rook
        this.rowList[0].colList[0].piece = new Rook('rook', 'black')
        this.rowList[0].colList[7].piece = new Rook('rook', 'black')

        // Create white rook
        this.rowList[7].colList[0].piece = new Rook('rook', 'white')
        this.rowList[7].colList[7].piece = new Rook('rook', 'white')

        // Create black knight
        this.rowList[0].colList[1].piece = new Knight('knight', 'black')
        this.rowList[0].colList[6].piece = new Knight('knight', 'black')

        // Create white knight
        this.rowList[7].colList[1].piece = new Knight('knight', 'white')
        this.rowList[7].colList[6].piece = new Knight('knight', 'white')
        
        // Create black bishop
        this.rowList[0].colList[2].piece = new Bishop('bishop', 'black')
        this.rowList[0].colList[5].piece = new Bishop('bishop', 'black')

        // Create white bishop
        this.rowList[7].colList[2].piece = new Bishop('bishop', 'white')
        this.rowList[7].colList[5].piece = new Bishop('bishop', 'white')

        // Create queen
        this.rowList[0].colList[3].piece = new Queen('queen', 'black')
        this.rowList[7].colList[3].piece = new Queen('queen', 'white')

        // Create king
        this.rowList[0].colList[4].piece = new King('king', 'black')
        this.rowList[7].colList[4].piece = new King('king', 'white')
    }

    initUI() {
        // Create html file
        const boardElement = document.getElementById('chess-board')
        for (let rowIndex = 0 ; rowIndex < this.rows ; ++rowIndex) {
            const rowObject = this.rowList[rowIndex]
            const rowElement = rowObject.createRowElement()
            boardElement.appendChild(rowElement)

            for (let colIndex = 0 ; colIndex < this.cols ; ++colIndex) {
                // Create square element
                const squareObject = rowObject.colList[colIndex]
                const squareElement = squareObject.createSquareElement()
                rowElement.appendChild(squareElement)

                if (squareObject.piece !== null) {
                    // Create piece element
                    const pieceElment = squareObject.piece.createPieceElement()
                    squareElement.appendChild(pieceElment)
                }
                rowElement.appendChild(squareElement)
            }
            boardElement.appendChild(rowElement)
        }
    }
}