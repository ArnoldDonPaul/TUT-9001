import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TUT from '../../assets/power-down.gif';
import Power from '../../assets/power.png';

import './PowerDown.scss';

export default class PowerDown extends Component {
    render() {
        return (
            <section className='background'>
                <div className='boot'>
                    <img className='TUT-power' src={TUT} alt='Daisy...Daisy...'></img>
                </div>
                <Link to='/boot'>
                    <img className='nav__power' src={Power} alt='Power'></img>
                </Link>
                <div className='output'>

                </div>
            </section>
        )
    }
}