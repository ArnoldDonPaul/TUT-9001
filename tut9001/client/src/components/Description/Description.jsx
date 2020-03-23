import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TUT from '../../assets/talking.gif';
import Power from '../../assets/power.png';
import axios from 'axios';

import './Description.scss'

export default class Description extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        axios
            .get(`http://localhost:8080/description`)
            .then(response => {
                this.setState({
                    data: response.data
                });
            }
            )
    }
    render() {
        return (
            <section className='background'>
                <div className='greeting'>
                    <img className='TUT-greeting' src={TUT} alt='Daisy...Daisy...'></img>
                    <div className='terminal'>
                        {this.state.data.map(x => (
                            <div key={x.id}>
                                <p className='exercise'>{x.name}</p>
                                <p className='description'>{x.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <Link to='/power-down'>
                    <img className='power' src={Power} alt='button'></img>
                </Link>
            </section>
        )
    }
}