import React from 'react';
import { useSelector } from 'react-redux';
import GridSquare from './GridSquare';
import { shapes } from '../utils';

// Draws the "next" block view showing the next block to drop
export default function NextBlock(props) {
    const nextShape = useSelector((state) => state.game.nextShape );
    const box = shapes[nextShape][0]

    const grid = box.map((rowArray, row) => {
        return rowArray.map((square, column) => {
            return <GridSquare key={`${row}${column}`} color={square} />
        })
    })

    return (
        <div className="next-block">
            {grid}
        </div>
    )
}
