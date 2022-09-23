class Piece {
    constructor(colIndex, rowIndex, name, color) {
        this.colIndex = colIndex
        this.rowIndex = rowIndex
        this.name = name
        this.color = color
        this.pieceElement = document.createElement('img') 
        this.availableMove=[[]]
    }

    renderPieceElement() {
        this.pieceElement.classList.add('piece')
        this.pieceElement.src = `./assets/images/pieces/${this.color}_${this.name}.png`
        this.pieceElement.addEventListener('click', function(event) {
            const squareElement = event.target.parentElement
            const pieceObject = findSquareObject(boardRowList, squareElement).piece
            sessionStorage.setItem('curentPieceIndex', `[${pieceObject.rowIndex},${pieceObject.colIndex}]`)
            pieceObject.findValidMove(boardRowList)
        })
    }

    findValidMove() {
    }

    destroyPieceElement(){}
}
