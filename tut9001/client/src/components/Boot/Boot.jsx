import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ArrowR from '../../assets/arrow-right.png';
import Power from '../../assets/power.png';
import TUT from '../../components/TUT/TUT';
import About from '../About/About';

import './Boot.scss';

export default class Boot extends Component {
    render() {
        return (
            <section className='background'>
                <TUT tut_state='boot'/>
                <Link to='/power-down'>
                    <img className='nav__power' src={Power} alt='Scanner'></img>
                </Link>
                <Link to='/greeting'>
                    <img className='nav__arrow' src={ArrowR} alt='button'></img>
                </Link>
                <About />
            </section>
        )
    }
}