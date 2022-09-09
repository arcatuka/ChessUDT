class Board {
    constructor() {
        this.rows = 8
        this.cols = 8
        this.squares = []
    }

    Init() {
        // Create squares and pieces object
        for (let rowIndex = 0 ; rowIndex < this.rows ; ++rowIndex) {
            let rowBoard = []
            for (let colIndex = 0 ; colIndex < this.cols ; ++colIndex) {
                const color  = (colIndex + rowIndex) % 2 === 0 ? '#faf5de' : '#e1dbb5'
                const square = new Square(colIndex, rowIndex, color, null)
                
                if (rowIndex === 1) {
                    square.piece = new Pawn('pawn', 'black')
                }

                if (rowIndex === 6) {
                    square.piece = new Pawn('pawn', 'white')
                }
                rowBoard.push(square)
            }
            this.squares.push(rowBoard)
        }

        // Create black rook
        this.squares[0][0].piece = new Rook('rook', 'black')
        this.squares[0][7].piece = new Rook('rook', 'black')

        // Create white rook
        this.squares[7][0].piece = new Rook('rook', 'white')
        this.squares[7][7].piece = new Rook('rook', 'white')

        // Create black knight
        this.squares[0][1].piece = new Knight('knight', 'black')
        this.squares[0][6].piece = new Knight('knight', 'black')

        // Create white knight
        this.squares[7][1].piece = new Knight('knight', 'white')
        this.squares[7][6].piece = new Knight('knight', 'white')
        
        // Create black bishop
        this.squares[0][2].piece = new Bishop('bishop', 'black')
        this.squares[0][5].piece = new Bishop('bishop', 'black')

        // Create white bishop
        this.squares[7][2].piece = new Bishop('bishop', 'white')
        this.squares[7][5].piece = new Bishop('bishop', 'white')

        // Create queen
        this.squares[0][3].piece = new Queen('queen', 'black')
        this.squares[7][3].piece = new Queen('queen', 'white')

        // Create king
        this.squares[0][4].piece = new King('king', 'black')
        this.squares[7][4].piece = new King('king', 'white')
    }

    InitUI() {
        // Create html file
        const boardElement = document.getElementById('chess-board')
        for (let rowIndex = 0 ; rowIndex < this.rows ; ++rowIndex) {
            const rowElement = document.createElement('div')
            rowElement.style.display = 'flex'
            for (let colIndex = 0 ; colIndex < this.cols ; ++colIndex) {
                // Create square element
                const squareElement = document.createElement('div')
                squareElement.style.width = '75px'
                squareElement.style.height = '75px'
                squareElement.style.backgroundColor = this.squares[rowIndex][colIndex].color
                squareElement.style.display = 'flex'
                squareElement.style.justifyContent = 'center'
                squareElement.style.alignItems = 'center'
                
                if (this.squares[rowIndex][colIndex].piece !== null) {
                    // Create image element
                    const imageElment = document.createElement('img')
                    // console.log(image.element, image.color, image.name)
                    imageElment.src = this.squares[rowIndex][colIndex].piece.url
                    imageElment.style.width = '70px'
                    imageElment.style.height = '70px'
                    squareElement.appendChild(imageElment)
                }
                rowElement.appendChild(squareElement)
            }
            boardElement.appendChild(rowElement)
        }
    }
}