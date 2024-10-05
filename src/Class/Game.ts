import { Board } from "./Board"
import { Cell } from "./Cell"

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
    public revelCell (cell:Cell){
        this.board.revelCell(cell)
    }
    public openZeroCells (){
        this.board.openZeroCells()
    }
        
}