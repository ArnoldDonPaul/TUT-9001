import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TUT from '../../assets/boot.gif';
import ArrowR from '../../assets/arrow-right.png';
import Power from '../../assets/power.png';

import './Boot.scss';

export default class Boot extends Component {
    render() {
        return (
            <section className='background'>
                <div className='boot'>
                    <img className='TUT-boot' src={TUT} alt='Daisy...Daisy...'></img>
                </div>
                <Link to='/power-down'>
                    <img className='nav__power' src={Power} alt='Scanner'></img>
                </Link>
                <Link to='/greeting'>
                    <img className='nav__arrow' src={ArrowR} alt='button'></img>
                </Link>
                <div className='output'>

                </div>
            </section>
        )
    }
}