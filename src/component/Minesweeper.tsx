import { Game } from '../Class/Game';
import { Cell } from '../Class/Cell';
import { useState, useEffect } from 'react';

function Minesweeper() {
    const [game, setGame] = useState<Game | null>(null);
    const [minesweeperBoard, setMinesweeperBoard] = useState<Cell[][]>([]); 
    
    useEffect(() => {
        const newGame = new Game(15); 
        setGame(newGame);
        setMinesweeperBoard(newGame.getCells());
    }, []);

    if (!game) return <div>Loading...</div>; 

    const boardWidth = game.getBoardWidth();
    const widthPlusBorder = boardWidth + 10;

    const handleClick = (cell: Cell) => {
        const newBoard = minesweeperBoard.map((row) => row.slice()); 
        const x = cell.getX();
        const y = cell.getY();
        game.revelCell(cell); 
        newBoard[x][y] = cell; 
        setMinesweeperBoard(newBoard); 
    };

    

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
                        const isMine = cell.isMine();

                        const x = cell.getX();
                        const y = cell.getY();
                        const cellNumber = cell.getmineNumber()
                        const cellClass = `cell ${isOpen ? 'revel_cell' : ''}  ${isMine && isOpen ? "mine_cell" : ""} number_${cellNumber} `;
                            
                        return (
                            <div    
                                key={`${x}-${y}`}
                                className={cellClass}
                                onClick={() => handleClick(cell)}
                            >
                                {(!isMine && isOpen) ? cellNumber : ""}
                            </div>
                        );
                    })
                ))}
            </main>
        </div>
    );
}

export default Minesweeper;
