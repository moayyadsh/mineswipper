import { Board } from "./Board"

export class Game {
    private board = [[]] as any

    constructor(size: number) {
        this.board = new Board(size)

    }
    public getCells() {
        return this.board.getCells()
    }
    public getBoardWidth(){
        return this.board.calcBoardWidth()
    }
    public getaddRandomMinesToBoard(){
        return this.board.addRandomMinesToBoard()
    }
}