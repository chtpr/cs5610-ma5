import React, {useState} from 'react';
import Square from './Square';

function Grid() {
    const [grid, setGrid] = useState([
        [0,0],
        [0,0]
    ])

    const clickHandler = (x, y) => {
        // declare new grid
        let newGrid = []
        // for each row
        for (let i = 0; i < grid.length; i++) {
            let row = [];
            // for each square
            for (let j = 0; j < grid.length; j++) {
                // if square is the one clicked on
                if (i == x && j == y) {
                    // if square value is 0 push 1
                    if(grid[x][y] == 0) row.push(1)
                    else {
                        // if square value is 1 push 0
                        row.push(0)
                    }
                    // if square is not the one clicked on, keep its prev value
                } else {
                    row.push(grid[i][j])
                }
            }
            newGrid.push(row)
        }
        setGrid(newGrid)
    }

    const [count, setCount] = useState(0)
    
    const countHandler = (x, y) => {
        (grid[x][y] === 0) ? setCount(count + 1) : setCount(count - 1)
    }

    const renderSquare = (x, y) => {
        return <Square val={grid[x][y]} x={x} y={y} click={(x,y) => clickHandler(x,y)}>

        </Square>
    }

    return (
        <div>
            <h3>
                Count: {count}
            </h3>
            <div className="grid">
            <div onClick={() => {countHandler(0,0)}}>{renderSquare(0,0)}</div>
            <div onClick={() => {countHandler(0,1)}}>{renderSquare(0,1)}</div>
            <div onClick={() => {countHandler(1,0)}}>{renderSquare(1,0)}</div>
            <div onClick={() => {countHandler(1,1)}}>{renderSquare(1,1)}</div>
            </div>
        </div>
    )
}

export default Grid;