import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TUT from '../../assets/talking.gif';
import Button from '../../assets/arrow.png';

import './Greeting.scss'

export default class Greeting extends Component {
    render() {
        return (
            <section className='background'>
                <div className='greeting'>
                    <img className='TUT-talking' src={TUT} alt='Daisy...Daisy...'></img>
                    <p className='prompt__username'>[GREETINGS 'USER']</p>
                    <p className='prompt__username'>[ARE YOU READY TO CONDUCT YOUR EXERCISE ROUTINE?]</p>
                    <Link to='/input-form'>
                        <img className='prompt__arrow' src={Button} alt='Scanner'></img>
                    </Link>
                </div>
            </section>
        )
    }
}