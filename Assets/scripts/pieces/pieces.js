class Piece {
    constructor(name, color) {
        this.name = name
        this.color = color
        this.url = `./assets/images/pieces/${this.color}_${this.name}.png`
    }
}