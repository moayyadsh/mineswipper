import { Game } from '../Class/Game';
import { Cell } from '../Class/Cell';
import {  useState } from 'react';
import { Board } from '../Class/Board';

function Minesweeper() {
    const game = new Game(20)
    const [minesweeperBoard, setMinesweeperBoard] = useState<Cell[][]>(game.getCells());
    const boardWidth = game.getBoardWidth();
    const widthPlusBorder = boardWidth + 10;

   
    const handleClick = (cell: Cell) => {

    const newBoard = [...minesweeperBoard];
    const x = cell.getX()
    const y = cell.getY()
    cell.openCell();
    newBoard[x][y] = cell;
    setMinesweeperBoard(newBoard)
    };
    const board = new Board(3)
    console.log(board.revelAllCells());     
    
 

    return (
        <div className='minesweeper'>
            <header>
                <div className='cell_counter'></div>
                <div className='emoji'></div>
                <div className='timer'></div>
            </header>
            <main className='cells_border' style={{ width: widthPlusBorder, height: widthPlusBorder }}>
                {minesweeperBoard.map((row: Cell[], rowIndex: number) => (
                    row.map((cell: Cell) => {
                        const isOpen = cell.getIsOpen() ?? false;
                        const isMine = cell.isMine()
                        const x = cell.getX();
                        const y = cell.getY();
                        const cellClass = `cell ${isOpen ? 'revel_cell' : ''}  ${isMine ? "mine_cell" : ""} `;

                        return (
                            <div    
                                key={`${x}-${y}`}
                                className={cellClass}
                                onClick={() => handleClick(cell)}
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