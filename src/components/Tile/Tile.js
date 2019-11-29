import React from 'react';

import { Col } from 'reactstrap';
import './Tile.scss';

const Tile = (props) => {

    let bottomLine = ((props.id > 17 && props.id < 27) || (props.id > 44 && props.id < 54) ? 'bottomLine ' : '');

    let tileIndexPlus = props.id + 1;
    let rightLine = ((tileIndexPlus % 3 === 0 && tileIndexPlus % 9 !== 0) ? 'rightLine' : '');

    return(
        <Col className='tile'>
            <input
                type='number'
                max='9'
                min='1'
                id={props.id}
                value={props.value}
                readOnly={props.readOnly}
                onChange={props.onChange}
                className={props.readOnly === true ? 'readOnly ' + bottomLine + rightLine : '' + bottomLine + rightLine} />  
        </Col>
    );
}

export default Tile;