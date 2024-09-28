import React from 'react'
import { Game } from '../Class/Game';
import { Cell } from '../Class/Cell';

function Minesweeper() {



    const game = new Game(20);
    const board = game.getCells()
    const BoardWidth = game.getBoardWidth()
    const WidthPlusBorder = BoardWidth + 10;
    console.log(game.getaddRandomMinesToBoard());
    
    return (
        <div className='minesweeper'>
            <header>
                <div className='cell_counter'></div>
                <div className='emoji'></div>
                <div className='timer'></div>
            </header>
            <main className='cells_border' style={{width:WidthPlusBorder,height:WidthPlusBorder}}>
                {board.map((item: Cell[][]) => {
                    console.log(item);
                    
                    return item?.map((cellItem: any) => {
                        console.log(cellItem.type);
                        
                        if(cellItem.type === "mine"){
                            return <div className='revel_cell mine_cell'></div>
                        }
                        else{
                            return <div key={cellItem} className='cell'></div>}
                        
                       
                    })
                })}
            </main>
        </div>
    )
}

export default Minesweeper