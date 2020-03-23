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
                    <h1 className='output__about'>ABOUT</h1>
                    <p className='output__about'>TUT-9001 AIMS TO DELIVER SIMPLIFIED WORKOUTS THAT GUIDE THE USER THROUGH BASIC PATTERNS OF MOVEMENT.</p>
                    <p className='output__about'>TUT STANDS FOR "TIME UNDER TENSION", SO IT DOESNT MATTER HOW MANY REPITITIONS ARE COMPLETED - RATHER, TUT-9001 ENSURES THE USER IS MAINTAINING TENSION THROUGHOUT THE MUSCLE FOR AN APPROPRIATE AMOUNT OF TIME. </p>
                </div>
            </section>
        )
    }
}