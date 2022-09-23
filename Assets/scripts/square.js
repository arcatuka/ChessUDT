class Square {
    constructor(colIndex, rowIndex, color, piece) {
        this.colIndex = colIndex
        this.rowIndex = rowIndex
        this.color = color
        this.piece = piece
        this.squareElement = document.createElement('div')
    }



    renderSquareElement() {
        this.squareElement.style.display = 'flex'
        this.squareElement.style.width = '75px'
        this.squareElement.style.height = '75px'
        this.squareElement.style.justifyContent = 'center'
        this.squareElement.style.alignItems = 'center'
        this.squareElement.style.border = '1px solid black'
        this.squareElement.style.backgroundColor = this.color
        return this.squareElement
    }

    changeSquareElementColor() {
        
    }

}