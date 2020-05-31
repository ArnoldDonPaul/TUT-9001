import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TUT from '../TUT/TUT';
import Power from '../../assets/power.png';
import ArrowR from '../../assets/arrow-right.png';
import About from '../About/About';
import UserInput from '../UserInput/UserInput';

import './Greeting.scss'

export default class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            value: '',
            showInfo: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value.toUpperCase() });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.value === '') {
            this.setState({
                username: 'DAVE',
                showInfo: true
            });
        }
        else {
            this.setState({
                username: this.state.value,
                showInfo: true
            });
        }
    }
    render() {
        return (
            <section className='background'>
                <div className='greeting'>
                    <TUT tut_state='talking' />
                    <div className='terminal'>
                        <p className='terminal__text'>>> TUT-9001 SYSTEM READY </p>
                        <UserInput />
                        <div className='result-box'>
                            {this.state.showInfo && (
                                <>
                                    <p className='terminal__text--intro'>>> HELLO THERE, <span>{this.state.username}</span></p>
                                    <p className='terminal__text--intro'>>> I AM A TUT-9001 PERSONAL TRAINING ASSISTANT</p>
                                    <p className='terminal__text--intro'>>>  MY GOAL IS TO PROVIDE YOU WITH GUIDED MOVEMENT ROUTINES DURING TIMES OF *ahem* ...ISOLATION</p>
                                    <p className='terminal__text--intro'>>> SHALL WE GET STARTED THEN?</p>
                                </>
                            )}
                        </div>
                    </div>
                    <Link to='/power-down'>
                        <img className='nav__power' src={Power} alt='button'></img>
                    </Link>
                    {this.state.showInfo && (
                        <Link to='/input-form'>
                            <img className='nav__arrow' src={ArrowR} alt='button'></img>
                        </Link>
                    )}
                    <About />
                </div>
            </section>
        )
    }
}