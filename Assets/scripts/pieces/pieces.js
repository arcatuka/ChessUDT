class Piece {
    constructor(colIndex, rowIndex, name, color) {
        this.colIndex = colIndex;
        this.rowIndex = rowIndex;
        this.name = name;
        this.color = color;
        this.pieceElement = document.createElement('img')
    }

    renderPieceElement() {
        this.pieceElement.style.display = 'inline-block';
        this.pieceElement.style.width = '75px';
        this.pieceElement.style.height = '75px';
        this.pieceElement.style.border = '1px solid black';
        this.pieceElement.src = `./assets/images/pieces/${this.color}_${this.name}.png`
        return this.pieceElement;
    }

    destroyPieceElement() {

    }

    findValidMove() {
        
    }
}