import React from 'react';
import TUT_OFF from '../../assets/off.png';
import TUT_BOOT from '../../assets/boot.gif';
import TUT_TALKING from '../../assets/talking.gif';

const TUT = props => {
    let tutImage
    switch (props.tut_state) {
        case boot:
            tutImage = TUT_BOOT;
            break;
        case TUT_TALKING:
            tutImage = TUT_TALKING;
            break;
        default:
            tutImage = TUT_OFF;

    }

    return (
        <div className='tut-container'>
            <img className='TUT' src={tutImage} alt='Daisy...Daisy...'></img>
        </div>
    );
}

export default TUT;