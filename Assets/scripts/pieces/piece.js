class Piece {
    constructor(colIndex, rowIndex, name, color) {
        this.colIndex = colIndex
        this.rowIndex = rowIndex
        this.name = name
        this.color = color
        this.pieceElement = document.createElement('img')
        this.availableMove = []
    }
    
    renderPieceElement() {
        this.pieceElement.classList.add('piece')
        this.pieceElement.src = `./assets/images/pieces/${this.color}_${this.name}.png`
        this.pieceElement.style.width = '70px'
        this.pieceElement.style.height = '70px'
        this.pieceElement.style.margin = '0px'
        this.pieceElement.attributes.data = this
        return this.pieceElement
    }

    destroyPieceElement() {
        this.pieceElement.style.display = 'none'
    }

    findValidMove(rowList) {
        
    }
}
