import { Cell } from "./Cell";

export     class Board {

    private cells: Cell[][] = [];
    private mineNumber: number = 5;
    private cellWidth:number =24;
    private size :number ;
    constructor(size: number) {
        this.cells = this.createBoard(size);
         this.size = size;
         
         
    }
    private createBoard(size: number): any {
        const rowArray: any = []
        for (let x = 0; x < size; x++) {
            const columnArray: any = []
            for (let y = 0; y < size; y++) {
                const cell = new Cell(x, y );
                
                
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
            const randomX = Math.floor(Math.random() * this.size) ;
            const randomY = Math.floor(Math.random() * this.size) ;
            const MineCell = new Cell(randomX,randomY,"mine")
            
            if(this.cells[randomX][randomY].getType() === "mine"){
                    
            }else{
                this.cells[randomX][randomY] = MineCell as any
                leftMines--
            }
        }
        
    }
    private revelCell() {
    }
    public getCells() {
        return this.cells
    }
    public calcBoardWidth(){
       
 
        return (this.size  * this.cellWidth); 
    }
}