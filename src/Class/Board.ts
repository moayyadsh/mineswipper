import { Cell } from "./Cell";

export class Board {

    private cells: Cell[][] = [];
    private mineNumber: number = 15;
    private cellWidth: number = 24;
    private size: number;
    constructor(size: number) {
        this.cells = this.createBoard(size);
        this.size = size;

    }

    private createBoard(size: number): any {
        const rowArray: any = []
        for (let x = 0; x < size; x++) {
            const columnArray: any = []
            for (let y = 0; y < size; y++) {
                const cell = new Cell(x, y);

                columnArray.push(cell)
            }
            rowArray.push(columnArray)

        }
        return rowArray

    }
    public handleCellClick(x: number, y: number) {
        const cell = this.cells[x][y];
    
        
        if (!cell.getIsOpen()) {
           
            cell.openCell();
            console.log(  cell.openCell());
            
            console.log(`Cell opened.`);
            if (cell.getType() === "mine") {
                    console.log(" Game Over.");
                } 

        } else {
            console.log(`Cell is already open.`);
        }
    }
   
    private addRandomMinesToBoard() {

        let leftMines = this.mineNumber;
        console.log(leftMines);

        while (leftMines > 0) {
            const randomX = Math.floor(Math.random() * this.size);
            const randomY = Math.floor(Math.random() * this.size);
            const MineCell = new Cell(randomX, randomY, "mine")

            if (this.cells[randomX][randomY].getType() === "mine") {

            } else {
                this.cells[randomX][randomY] = MineCell as any
                leftMines--
            }
        }

    }
    public revelCell() {

    }
    public getCells() {
        return this.cells
    }
    public calcBoardWidth() {

        return (this.size * this.cellWidth);
    }
}



















    
            // // If the cell is a mine, handle the loss scenario (you can add logic here)
            // if (cell.getType() === "mine") {
            //     console.log("Boom! Game Over.");
            // } else {
            //     // If it's not a mine, you can reveal neighboring cells if you want
            //     // (depending on the logic of your game).
            //     console.log(`Safe cell at (${x}, ${y}) opened.`);
            // }