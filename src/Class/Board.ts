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
   
    public calcMineNumber(x:number , y:number){
        let cellNumber = 0;
        console.log(cellNumber);

        if(this.cells[x][y+1].getType() =="mine" ){
            cellNumber++
            console.log(cellNumber);
            if(this.cells[x][y-1].getType() =="mine" ){
                cellNumber++
                if(this.cells[x+1][y].getType() =="mine" ){
                    cellNumber++
                    if(this.cells[x-1][y].getType() =="mine" ){
                        cellNumber++
                        if(this.cells[x+1][y+1].getType() =="mine" ){
                            cellNumber++
                            if(this.cells[x-1][y-1].getType() =="mine" ){
                                cellNumber++
                                if(this.cells[x+1][y-1].getType() =="mine" ){
                                    cellNumber++
                                    if(this.cells[x-1][y+1].getType() =="mine" ){
                                        cellNumber++
                                    }
                                }
                            }
                        }
                    }                  
                }
            }
        console.log(cellNumber);

              
        }else{
        console.log("no mine");

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
































// public calcMineNumber(x: number, y: number) {
//     let cellNumber = 0;
//     console.log(cellNumber);

//     // Define the relative positions of the adjacent cells
//     const directions = [
//         [-1, -1], [-1, 0], [-1, 1], // Top-left, Top, Top-right
//         [0, -1],          [0, 1],   // Left,       , Right
//         [1, -1], [1, 0], [1, 1]     // Bottom-left, Bottom, Bottom-right
//     ];

//     // Iterate through each direction to check for mines
//     for (const [dx, dy] of directions) {
//         const newX = x + dx;
//         const newY = y + dy;

//         // Check if the new coordinates are within bounds
//         if (this.isValidCell(newX, newY) && this.cells[newX][newY].getType() === "mine") {
//             cellNumber++;
//         }
//     }

//     console.log(cellNumber);
// }

// // Helper function to check if the cell is within bounds
// private isValidCell(x: number, y: number): boolean {
//     return x >= 0 && x < this.cells.length && y >= 0 && y < this.cells[0].length;
// }