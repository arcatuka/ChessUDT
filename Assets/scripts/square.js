class Square {
    constructor(color, piece) {
        this.color = color
        this.piece = piece
        this.squareElement = document.createElement('div')
    }

    designSquareElement() {
        this.squareElement.classList.add('square', `${this.color}-square`)
    }
}