import React from 'react';
import Tile from '../Tile/Tile';

import './Board.scss';

const Board = props => {
    
    const splitBoard = props.board.split('');

    const value = splitBoard.map((number, i) => {
        return <Tile
                className='tile-matrix'
                key={i}
                id={i}
                readOnly={props.initialBoard[i] !== '.'}
                value={number}
                onChange={e => props.onChange(i, e.target.value)} /> 
    });

    return <div className='board-matrix'> {value} </div>
}

export default Board; 