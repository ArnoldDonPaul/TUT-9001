import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import TUT from '../../assets/boot.gif';
// import Button from '../../assets/arrow.png';

import './Boot.scss'

export default class Boot extends Component {
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
        this.setState({
            username: this.state.value,
            showInfo: true
        });
    }
    render() {
        return (
            <section className='background'>
                <div className='boot'>
                    <img className='TUT-boot' src={TUT} alt='Daisy...Daisy...'></img>
                    <p className='prompt__booting'>[ TUT-9001 SYSTEM READY ]</p>
                    <p className='prompt__username'>[ PLEASE ENTER YOUR USERNAME ]</p>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' value={this.state.value} onChange={this.handleChange}></input>
                        <input type='submit' value='Submit'></input>
                    </form>
                    <div className='result-box'>
                        {this.state.showInfo && (
                            <>
                                <p className='username'>{this.state.username}</p>
                            </>
                        )}
                    </div>
                </div>
            </section>
        )
    }
}