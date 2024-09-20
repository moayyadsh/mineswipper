import React from 'react'

function Minesweeper() {
    return (
        <div className='minesweeper'>
            <header>
                <div className='cell_counter'></div>
                <div className='emoji'></div>
                <div className='timer'></div>
            </header>
            <main className='cells_border'>
             {Array.from({length:512}).map((item:any)=>{
                return <div className='cell'></div>
             })}
            </main>
        </div>
    )
}

export default Minesweeper