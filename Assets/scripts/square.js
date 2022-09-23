class Square {
    constructor(SquareDefaultColor, piece) {
        this.color = SquareDefaultColor
        this.piece = piece
        this.squareElement = document.createElement('div')
    }

    renderSquareElement() {
        this.squareElement.classList.add('square')
        this.squareElement.style.backgroundColor = this.color
        this.squareElement.addEventListener('click', function(event) {
            const squareElement = event.target
            if (squareElement.style.backgroundColor === 'red') {
                // const squareObject = findSquareObject(boardRowList, squareElement)
                // const currentPieceIndex = JSON.parse(sessionStorage.getItem('curentPieceIndex'))
                // const rowIndex = currentPieceIndex[0]
                // const colIndex = currentPieceIndex[1]
                // squareObject.piece = boardRowList[rowIndex].colList[colIndex].piece
                // boardRowList[rowIndex].colList[colIndex].piece = null
                board.renderChessBoard()
            }
        })
    }
    changeSquareElementColor(color){}
}

const SquareDefaultColor = {
    CitrineWhite:"CitrineWhite",
    GrainBrown:"GrainBrown"
  };