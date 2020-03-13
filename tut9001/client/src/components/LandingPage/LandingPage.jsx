import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TUT from '../../assets/off.png';
import Button from '../../assets/button.png';

import './LandingPage.scss'

export default class LandingPage extends Component {
    render() {
        return (
            <section className='background'>
                <div className='landing'>
                    <img className='TUT-off' src={TUT} alt='Daisy...Daisy...'></img>
                    <p className='prompt__question'>[ PLACE YOUR FINGER ON THE SCANNER BELOW ]</p>
                    <Link to='/boot'>
                        <img className='prompt__button' src={Button} alt='Scanner'></img>
                    </Link>
                </div>
            </section>
        )
    }
}