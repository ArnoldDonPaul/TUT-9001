import React from 'react';
import TUT_OFF from '../../assets/off.png';
import TUT_BOOT from '../../assets/boot.gif';
import TUT_TALKING from '../../assets/talking.gif';
import TUT_POWER_DOWN from '../../assets/power-down.gif'
import './TUT.scss'

const TUT = props => {
    let tutImage
    switch (props.tut_state) {
        case 'boot':
            tutImage = TUT_BOOT;
            break;
        case 'talking':
            tutImage = TUT_TALKING;
            break;
        case 'powerdown':
            tutImage = TUT_POWER_DOWN;
            break;
        default:
            tutImage = TUT_OFF;
            break
    }

    return (
        <img className='TUT' src={tutImage} alt='Daisy...Daisy...'></img>
    );
}

export default TUT;