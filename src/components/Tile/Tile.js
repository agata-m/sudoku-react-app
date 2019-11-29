import React from 'react';

import { Col } from 'reactstrap';
import './Tile.scss';

const Tile = (props) => {

    return(
        <Col className='tile'>
            <input
                type='number'
                value={props.value}
                max='9'
                min='1'
                readOnly={props.readOnly}
                onChange={props.onChange} />  
        </Col>
    );
}

export default Tile;