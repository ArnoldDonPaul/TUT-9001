import React from 'react';
import { Link } from 'react-router-dom';
import TUT from '../../assets/talking.gif';
import Power from '../../assets/power.png';
import ArrowR from '../../assets/arrow-right.png';

import './InputForm.scss'

let Upper = ""
let Lower = ""
let Weights = ""

const InputForm = (props) => {
    if (props.inputProps.boxUpper === true) {
        Upper = "TRUE"
    } else {
        Upper = "FALSE"
    }
    if (props.inputProps.boxLower === true) {
        Lower = "TRUE"
    } else {
        Lower = "FALSE"
    }
    if (props.inputProps.boxYes === true) {
        Weights = "TRUE"
    } else {
        Weights = "FALSE"
    }
    return (
        <section className='background'>
            <div className='greeting'>
                <img className='TUT-greeting' src={TUT} alt='Daisy...Daisy...'></img>
                <div className='terminal'>
                    <p className='terminal__text'>>> PLEASE COMPLETE THE FOLLOWING...</p>
                    <p className='terminal__text'>>> WHAT IS YOUR FOCUS FOR TODAY?</p>
                    <form className='checkbox-form' onSubmit={props.handleSubmit}>
                        <div className='option-box'>
                            <input type="checkbox" className='option-box__box' name="upper" value="upper" onChange={props.handleChange1}></input>
                            <label for="upper" className='option-box__text'> UPPER BODY</label>
                        </div>
                        <div className='option-box'>
                            <input type="checkbox" className='option-box__box' name="lower" value="lower" onChange={props.handleChange2}></input>
                            <label for="upper" className='option-box__text'> LOWER BODY</label>
                        </div>
                        <p className='terminal__text'>>> DO YOU HAVE ACCESS TO DUMBBELLS?</p>
                        <div className='option-box'>
                            <input type="checkbox" className='option-box__box' name="yes" value="yes" onChange={props.handleChange3}></input>
                            <label for="yes" className='option-box__text'> YES</label>
                        </div>
                        <p className='terminal__text'>>> READY TO RECEIVE YOUR WORKOUT?</p>
                        <input type='submit' value='CONFIRM'></input>
                    </form>
                    <div className='result-box'>
                        {props.inputProps.showInfo && (
                            <>
                                <p className='terminal__text'>>> [EXERCISE ROUTINE GENERATED]</p>
                            </>
                        )}
                    </div>
                </div>
                <Link to='/'>
                    <img className='nav__power' src={Power} alt='button'></img>
                </Link>
                {props.inputProps.showInfo && (
                    <>
                        <img className='nav__arrow' src={ArrowR} alt='button'></img>
                        <section className='output'>
                            <div className='output__text'>
                                <p>UPPER: {Upper}</p>
                            </div>
                            <div className='output__text'>
                                <p>LOWER: {Lower}</p>
                            </div>
                            <div className='output__text'>
                                <p>WEIGHTS: {Weights}</p>
                            </div>
                        </section>
                    </>
                )}
            </div>
        </section>
    )
}

export default InputForm