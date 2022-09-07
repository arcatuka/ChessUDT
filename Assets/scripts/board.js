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
                const color  = (colIndex + rowIndex) % 2 === 0 ? '#faf5de' : '#e1dbb5',
                    squareElement = document.createElement('div'),
                    squareObject = new Square(colIndex, rowIndex, color, squareElement, null)
                
                if (rowIndex === 1) {
                    const imageElement = document.createElement('img')
                    squareObject.piece = new Pawn('pawn', 'black', imageElement)
                }

                if (rowIndex === 6) {
                    const imageElement = document.createElement('img')
                    squareObject.piece = new Pawn('pawn', 'white', imageElement)
                }
                rowBoard.push(squareObject)
            }
            this.squares.push(rowBoard)
        }

        // Create black rook
        this.squares[0][0].piece = new Rook('rook', 'black', document.createElement('img'))
        this.squares[0][7].piece = new Rook('rook', 'black', document.createElement('img'))

        // Create white rook
        this.squares[7][0].piece = new Rook('rook', 'white', document.createElement('img'))
        this.squares[7][7].piece = new Rook('rook', 'white', document.createElement('img'))

        // Create black knight
        this.squares[0][1].piece = new Knight('knight', 'black', document.createElement('img'))
        this.squares[0][6].piece = new Knight('knight', 'black', document.createElement('img'))

        // Create white knight
        this.squares[7][1].piece = new Knight('knight', 'white', document.createElement('img'))
        this.squares[7][6].piece = new Knight('knight', 'white', document.createElement('img'))
        
        // Create black bishop
        this.squares[0][2].piece = new Bishop('bishop', 'black', document.createElement('img'))
        this.squares[0][5].piece = new Bishop('bishop', 'black', document.createElement('img'))

        // Create white bishop
        this.squares[7][2].piece = new Bishop('bishop', 'white', document.createElement('img'))
        this.squares[7][5].piece = new Bishop('bishop', 'white', document.createElement('img'))

        // Create queen
        this.squares[0][3].piece = new Queen('queen', 'black', document.createElement('img'))
        this.squares[7][3].piece = new Queen('queen', 'white', document.createElement('img'))

        // Create king
        this.squares[0][4].piece = new King('king', 'black', document.createElement('img'))
        this.squares[7][4].piece = new King('king', 'white', document.createElement('img'))
    }

    InitUI() {
        // Create html file
        const boardElement = document.getElementById('chess-board')
        for (let rowIndex = 0 ; rowIndex < this.rows ; ++rowIndex) {
            const rowElement = document.createElement('div')
            rowElement.style.display = 'flex'
            for (let colIndex = 0 ; colIndex < this.cols ; ++colIndex) {
                // Create square element
                const square = this.squares[rowIndex][colIndex]
                square.element.style.width = '75px'
                square.element.style.height = '75px'
                square.element.style.backgroundColor = square.color
                square.element.style.display = 'flex'
                square.element.style.justifyContent = 'center'
                square.element.style.alignItems = 'center'
                
                if (square.piece !== null) {
                    // Create image element
                    const image = square.piece
                    console.log(image.element, image.color, image.name)
                    image.element.src = `./assets/images/pieces/${image.color}_${image.name}.png`
                    image.element.style.width = '70px'
                    image.element.style.height = '70px'
                    square.element.appendChild(image.element)
                }
                rowElement.appendChild(square.element)
            }
            boardElement.appendChild(rowElement)
        }
    }
}