import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TUT from '../../assets/talking.gif';
import Power from '../../assets/power.png';
import ArrowR from '../../assets/arrow-right.png';

import './InputForm.scss'

export default class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInfo: false,
            boxUpper: false,
            boxLower: false,
            boxYes: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange1 = event => {
        this.setState({ boxUpper: event.target.checked }, () => {
            console.log("This returned true or false", this.state.boxUpper);
        });
    }
    handleChange2 = event => {
        this.setState({ boxLower: event.target.checked }, () => {
            console.log("This returned true or false", this.state.boxLower);
        });
    }
    handleChange3 = event => {
        this.setState({ boxYes: event.target.checked }, () => {
            console.log("This returned true or false", this.state.boxYes);
        });
    };
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            showInfo: true
        });
    }
    render() {
        return (
            <section className='background'>
                <div className='greeting'>
                    <img className='TUT-greeting' src={TUT} alt='Daisy...Daisy...'></img>
                    <div className='terminal'>
                        <p className='terminal__text'>>> PLEASE COMPLETE THE FOLLOWING...</p>
                        <p className='terminal__text'>>> WHAT IS YOUR FOCUS FOR TODAY?</p>
                        <form className='checkbox-form' onSubmit={this.handleSubmit}>
                            <div className='option-box'>
                                <input type="checkbox" className='option-box__box' name="upper" value="upper" onChange={this.handleChange1}></input>
                                <label for="upper" className='option-box__text'> UPPER BODY</label>
                            </div>
                            <div className='option-box'>
                                <input type="checkbox" className='option-box__box' name="lower" value="lower" onChange={this.handleChange2}></input>
                                <label for="upper" className='option-box__text'> LOWER BODY</label>
                            </div>
                            <p className='terminal__text'>>> DO YOU HAVE ACCESS TO DUMBBELLS?</p>
                            <div className='option-box'>
                                <input type="checkbox" className='option-box__box' name="yes" value="yes" onChange={this.handleChange3}></input>
                                <label for="yes" className='option-box__text'> YES</label>
                            </div>
                            <p className='terminal__text'>>> READY TO RECEIVE YOUR WORKOUT?</p>
                            <input type='submit' value='CONFIRM'></input>
                        </form>
                        <div className='result-box'>
                            {this.state.showInfo && (
                                <>
                                    <p className='terminal__text'>>> [ROUTINE GENERATED]</p>
                                </>
                            )}
                        </div>
                    </div>
                    <Link to='/'>
                        <img className='nav__power' src={Power} alt='button'></img>
                    </Link>
                    {this.state.showInfo && (
                        <Link to='/input-form'>
                            <img className='nav__arrow' src={ArrowR} alt='button'></img>
                        </Link>
                    )}
                </div>
            </section>
        )
    }
}

