import { Cell } from "./Cell";

export class Board {

    private cells: Cell[][] = [];
    private mineNumber: number = 40;
    private cellWidth: number = 24;
    private size: number;
    constructor(size: number) {
        this.size = size;
        this.cells = this.createBoard(size);
        this.addRandomMinesToBoard();
        this.calcAllCellsMineNumber()

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

    private addRandomMinesToBoard() {

        let leftMines = this.mineNumber;

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
    public revelAllCells() {
        const newCells = [...this.cells];
        return newCells.map((item: Cell[]) => {
            return item?.map((item: Cell) => {
                item.openCell();
                console.log(item);

                return item;

            })
        })



    }
    public revelCell(cell: Cell) {

        if (!cell.getIsOpen()) {
            console.log(cell);
            
            if (cell.getType() === "mine") {
                console.log(cell);
                
                console.log("game over");
                this.revelAllCells();
                return;
            }
            cell.openCell();

            if (cell.isEmpty()) {
                console.log(cell);
                 this.openZeroCells(cell)
            }

        } else {
            console.log(`Cell is already open.`);
        }
    }

    public calcMineNumber(cell: Cell) {
        let cellNumber = 0;
        const x = cell.getX();
        const y = cell.getY()
        const isMine = cell.isMine()
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const newCellx = x + i
                const newCelly = y + j
                if (isMine) {
                    return;
                } else if (newCellx > this.size - 1 || newCelly > this.size - 1 || newCellx < 0 || newCelly < 0) {


                } else {
                    const newCell = this.cells[newCellx][newCelly]
                    const isMine = newCell.getType() === "mine";
                    if (isMine) {
                        cellNumber++
                    }
                }

                cell.setmineNumber(cellNumber)


            }
        }

    }

    public calcAllCellsMineNumber() {
        this.cells.map((item: Cell[]) => {
            item?.map((item: Cell) => {

                this.calcMineNumber(item)
            })
        })
    }


    public getCells() {
        return this.cells
    }
    public calcBoardWidth() {

        return (this.size * this.cellWidth);
    }
    public openZeroCells(cell: Cell) {
        const x = cell.getX();
        const y = cell.getY()
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const newCellx = x + i;
                const newCelly = y + j;
                const outOfBoard = newCellx > this.size - 1 || newCelly > this.size - 1 || newCellx < 0 || newCelly < 0 || (newCellx === x && newCelly === y);

                if (outOfBoard) {
                    
                    
                }
                else if(!outOfBoard){

                    const newcell = this.cells[newCellx][newCelly]
                    console.log(newcell);
                    
                    const isMine = newcell.isMine()
                    if (isMine) {
                        console.log(newcell);
                        return;
                    }
    
                    else {
                        
                        this.revelCell(newcell)

                    }
                }




            }
        }

    }
}
