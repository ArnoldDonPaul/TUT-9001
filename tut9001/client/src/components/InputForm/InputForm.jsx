import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TUT from '../../assets/talking.gif';
import Button from '../../assets/arrow.png';

import './InputForm.scss'

export default class InputForm extends Component {
    render() {
        return (
            <section className='background'>
                <div className='input'>
                    <img className='TUT-talking' src={TUT} alt='Daisy...Daisy...'></img>
                    <p className='prompt__username'>[WHAT WILL THE FOCUS OF YOUR WORKOUT BE?]</p>
                    <form className='checkbox-form'>
                        <input type="checkbox" className='checkbox-form__upper' name="upper" value="upper"></input>
                        <label for="upper" className='checkbox-form__upper'> UPPER BODY</label>
                        <input type="checkbox" className='checkbox-form__lower' name="lower" value="upper"></input>
                        <label for="upper" className='checkbox-form__lower'> LOWER BODY</label>
                    </form>
                    <Link to='/'>
                        <img className='prompt__arrow' src={Button} alt='Scanner'></img>
                    </Link>
                </div>
            </section>
        )
    }
}