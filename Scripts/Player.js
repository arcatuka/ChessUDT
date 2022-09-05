class Player {
	constructor() {
		this.info = {
			isTurn: false, 
			isWin: false, 
		};
        this.data = {
            pieces: [], //pieces on chess board
            eated: [], // eated enemy pieces
            moves: [], //movement on board
        }
    }
    UpdatePiecesOnBoard(){
        //update each pieces on the chess board
    }
}