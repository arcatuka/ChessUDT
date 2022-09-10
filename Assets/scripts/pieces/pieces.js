class Piece {
    constructor(colIndex, rowIndex, name, color) {
        this.colIndex = colIndex
        this.rowIndex = rowIndex
        this.name = name
        this.color = color
        this.pieceElement = document.createElement('img') 
    }

    designPieceElement() {
        this.pieceElement.classList.add('piece')
        this.pieceElement.src = `./assets/images/pieces/${this.color}_${this.name}.png`
    }

    findMove() {
        
    }
}
