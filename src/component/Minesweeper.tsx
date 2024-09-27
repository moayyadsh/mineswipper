import React from 'react'

function Minesweeper() {

    class Game {
        private board = [[]] as any

           constructor(x :number, y:number){
            this.board = new Board(x , y)
            
           }
            public getCells(){
                return this.board.getCells()
            }
    }
    class Board {

        private cells: Cell[][] = [];
        private mine: number = 0;

        constructor (row: number, column: number){
              this.cells = this.createBoard(row,column)
        }
        private createBoard(row: number, column: number) : any {
            const rowArray : any = []
            for (let x = 0; x < row; x++) {
                const columnArray :any = []
                for (let y = 0; y < column; y++) {
                    const cell = new Cell(x,y);                    
                    columnArray.push(cell)
                }
                rowArray.push(columnArray)
                
            }
            return  rowArray
            
        }
        private addRandomMinesToBoard(){
        }
        private revelCell(){
        }
        public getCells (){
            return this.cells
        }
    }
    class Cell {
        private x : number ;
        private y : number ;
       private type : number | "mine" = 0;
       private isOpen: boolean = false ;
       private isFlage: boolean = false;

       constructor ( x : number,y :number){
        this.x = x;
        this.y = y;
       }

    }

    const game = new Game(5,5);
    const board = game.getCells()
    console.log(board);
    
    return (
        <div className='minesweeper'>
            <header>
                <div className='cell_counter'></div>
                <div className='emoji'></div>
                <div className='timer'></div>
            </header>
            <main className='cells_border'>
                {board.map((item: any) => {                    
                    return item?.map((cellItem:any)=>{
                        return <div key={cellItem} className='cell'></div>
                    })
                })}
            </main>
        </div>
    )
}

export default Minesweeper