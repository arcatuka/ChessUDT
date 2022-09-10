class Square {
    constructor(color, piece) {
        this.color = color
        this.piece = piece
        this.squareElement = document.createElement('div')
    }

    designSquareElement() {
        this.squareElement.classList.add('square')
        this.squareElement.style.backgroundColor = this.color
        this.squareElement.addEventListener('click', function(event) {
            const squareElement = event.target
            if (squareElement.style.backgroundColor === 'red') {
                const squareObject = findSquareObject(boardRowList, squareElement)
                const currentPieceIndex = JSON.parse(sessionStorage.getItem('curentPieceIndex'))
                const rowIndex = currentPieceIndex[0]
                const colIndex = currentPieceIndex[1]

                squareObject.piece = boardRowList[rowIndex].colList[colIndex].piece
                boardRowList[rowIndex].colList[colIndex].piece = null
                board.renderElements()
            }
          
        })
    }
}