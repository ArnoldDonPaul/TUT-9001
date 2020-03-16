import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TUT from '../../assets/off.png';
import Power from '../../assets/power.png';

import './LandingPage.scss'

export default class LandingPage extends Component {
    render() {
        return (
            <section className='background'>
                <div className='landing'>
                    <img className='TUT-off' src={TUT} alt='Daisy...Daisy...'></img>
                </div>
                <Link to='/boot'>
                    <img className='nav__power' src={Power} alt='Scanner'></img>
                </Link>
            </section>
        )
    }
}