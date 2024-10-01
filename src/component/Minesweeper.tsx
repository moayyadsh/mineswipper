
import { Game } from '../Class/Game';
import { Cell } from '../Class/Cell';
import { useState } from 'react';
import { Board } from '../Class/Board';

function Minesweeper() {
    const game = new Game(20);
    const board = game.getCells();
    const BoardWidth = game.getBoardWidth();
    const WidthPlusBorder = BoardWidth + 10;

    const test = new Board(5)
    // test.handleCellClick(1,1)
    console.log(test.handleCellClick(1,1));
    


    const [openedCells, setOpenedCells] = useState<Array<string>>([]);
    const handleCellClick = (x: number, y: number) => {
        const cellKey = `${x}-${y}`;
        if (!openedCells.includes(cellKey)) {
            const updatedCells = [...openedCells, cellKey];
            setOpenedCells(updatedCells);


        }
    };

    return (
        <div className='minesweeper'>
            <header>
                <div className='cell_counter'></div>
                <div className='emoji'></div>
                <div className='timer'></div>
            </header>
            <main className='cells_border' style={{ width: WidthPlusBorder, height: WidthPlusBorder }}>
                {board.map((row: Cell[], rowIndex: number) => (
                    row.map((cell: Cell, colIndex: number) => {
                        const cellKey = `${rowIndex}-${colIndex}`;
                        const isOpened = openedCells.includes(cellKey);
                        const cellClass = `cell ${isOpened ? 'revel_cell ' : ''} `;

                        return (
                            <div
                                key={cellKey}
                                className={cellClass}
                                onClick={() => handleCellClick(rowIndex, colIndex)}
                            >

                            </div>
                        );
                    })
                ))}
            </main>
        </div>
    );
}

export default Minesweeper;

















// import { Game } from '../Class/Game';
// import { Cell } from '../Class/Cell';

// function Minesweeper() {



//     const game = new Game(20);
//     const board = game.getCells()
//     const BoardWidth = game.getBoardWidth()
//     const WidthPlusBorder = BoardWidth + 10;
    
//     return (
//         <div className='minesweeper'>
//             <header>
//                 <div className='cell_counter'></div>
//                 <div className='emoji'></div>
//                 <div className='timer'></div>
//             </header>
//             <main className='cells_border' style={{width:WidthPlusBorder,height:WidthPlusBorder}}>
//                 {board.map((item: Cell[][]) => {
                    
//                     return item?.map((cellItem: any,index:number) => {
//                         console.log(cellItem)
                        
//                         if(cellItem.type === "mine"){
//                             return <div key={index} className='cell revel_cell mine_cell'></div>
//                         }
//                         else{
//                             return <div key={index}  className='cell'></div>
//                         }
                        
                       
//                     })
//                 })}
//             </main>
//         </div>
//     )
// }

// export default Minesweeper