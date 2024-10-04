import { Board } from "./Board"

export class Game {
    private board = [[]] as any

    constructor(size: number) {
        this.board = new Board(size)
        this.getAddRandomMinesToBoard()
    }
    public getCells() {
        return this.board.getCells()
    }
    public getBoardWidth(){
        return this.board.calcBoardWidth()
    }
    public getAddRandomMinesToBoard(){
        return this.board.addRandomMinesToBoard()
    }
        
}