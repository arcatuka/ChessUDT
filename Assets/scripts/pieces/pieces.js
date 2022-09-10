class Piece {
    constructor(name, color) {
        this.name = name
        this.color = color
        this.pieceElement = document.createElement('img') 
    }

    createPieceElement() {
        this.pieceElement.classList.add('piece')
        this.pieceElement.src = `./assets/images/pieces/${this.color}_${this.name}.png`
        return this.pieceElement
    }
}
