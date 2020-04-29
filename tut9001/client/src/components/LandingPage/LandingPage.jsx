import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Power from '../../assets/power.png';
import TUT from '../../components/TUT/TUT'
import About from '../About/About';

import './LandingPage.scss'

export default class LandingPage extends Component {
    render() {
        return (
            <section className='background'>
                <TUT />
                <Link to='/boot'>
                    <img className='nav__power' src={Power} alt='Scanner'></img>
                </Link>
                <About />
            </section >
        )
    }
}