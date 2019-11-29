import React from 'react';
import Tile from '../Tile/Tile';

import './Board.scss';

const Board = props => {
    
    console.log(props);
    const splitBoard = props.board.split('');

    let topBorder = false;
    let bottomBorder = false;
    let leftBorder = false;
    let rightBorder = false;

    if(this.props.index >= 9 ||
        this.props.index >=28 && this.props.index <= 36 ||
        this.props.index >= 55 && this.props.index <= 63
    ) {
        topBorder = true;
    }

    const value = splitBoard.map((number, i) => {
        return <Tile
                className={`tile-matrix ${topBorder} ${bottomBorder} ${leftBorder} ${right-Border}`}
                key={i}
                index={i}
                readOnly={props.readOnly}
                value={number}
                onChange={e => props.onChange(i, e.target.value)} /> 
    });

    return <div className='board-matrix'> {value} </div>
}

export default Board; 

/*
        &:nth-of-type(1-9 28-36 55-63) {
            border-top: 0.5rem;  
        }

        &:nth-of-type(
            1, 10, 19, 28, 37, 46, 55, 64, 73
            4, 13, 22, 31, 40, 49, 58, 67, 76
            7, 16, 25, 34, 43, 52, 61, 70, 79
        ) {
            border-left: 0.5rem;
        }
        

        &:nth-of-type(
            9, 18, 27, 36, 45, 54, 63, 72, 81
            6, 15, 24, 33, 42, 51, 60, 69, 78
            3, 12, 21, 30, 39, 48, 57, 66, 75
        ) {
            border-right: 0.5rem;
        }
        

        &:nth-of-type(n+73) {
            border-bottom: 0.5rem; 
        }
*/  