class Game {
    constructor(currentPlayer) {
        this.currentPlayer = currentPlayer
        this.board = new Board()
    }

    newGame() {
        this.board.initialize()
        this.board.renderChessBoard()
        this.board.addInitEvents()
    }

    restartGame() {

    }

    handlePlayerTurn(player) {
        
    }
}