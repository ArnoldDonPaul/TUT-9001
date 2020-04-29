import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Power from '../../assets/power.png';
import TUT from '../../components/TUT/TUT'

import './LandingPage.scss'

export default class LandingPage extends Component {
    render() {
        return (
            <section className='background'>
                <TUT />
                <Link to='/boot'>
                    <img className='nav__power' src={Power} alt='Scanner'></img>
                </Link>
                <div className='output'>
                    <h1 className='output__about'>ABOUT</h1>
                    <p className='output__about'>TUT-9001 AIMS TO DELIVER SIMPLIFIED WORKOUTS THAT GUIDE THE USER THROUGH BASIC PATTERNS OF MOVEMENT.</p>
                    <p className='output__about'>TUT STANDS FOR "TIME UNDER TENSION", SO IT DOESNT MATTER HOW MANY REPITITIONS ARE COMPLETED - RATHER, TUT-9001 ENSURES THE USER IS MAINTAINING TENSION THROUGHOUT THE MUSCLE FOR AN APPROPRIATE AMOUNT OF TIME. </p>
                </div>
            </section >
        )
    }
}