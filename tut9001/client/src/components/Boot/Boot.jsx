import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TUT from '../../assets/boot.gif';
import Button from '../../assets/arrow.png';

import './Boot.scss'

export default class Boot extends Component {
    render() {
        return (
            <section className='background'>
                <div className='boot'>
                    <img className='TUT-boot' src={TUT} alt='Daisy...Daisy...'></img>
                    <p className='prompt__booting'>[ TUT-9001 SYSTEM READY ]</p>
                    <p className='prompt__username'>[ PLEASE ENTER YOUR USERNAME ]</p>
                    <form>
                        <input></input>
                    </form>
                    <Link to='/username'>
                        <img className='prompt__arrow' src={Button} alt='Scanner'></img>
                    </Link>
                </div>
            </section>
        )
    }
}