import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Power from '../../assets/power.png';
import TUT from '../TUT/TUT';

import './PowerDown.scss';
import About from '../About/About';

export default class PowerDown extends Component {
    render() {
        return (
            <section className='background'>
                <TUT tut_state='powerdown' />
                <Link to='/boot'>
                    <img className='nav__power' src={Power} alt='Power'></img>
                </Link>
                <About />
            </section>
        )
    }
}