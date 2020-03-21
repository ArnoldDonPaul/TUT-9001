import React from 'react';
import { Link } from 'react-router-dom';
import TUT from '../../assets/talking.gif';
import Power from '../../assets/power.png';
import ArrowR from '../../assets/arrow-right.png';

import './InputForm.scss'
//practicing the use of if statements
let Upper = ""
let Lower = ""
let Weights = ""
let Title = ""
let Warmup1 = ""
let Warmup2 = ""
let Warmup3 = ""

const InputForm = (props) => {
    //reiterates which of the checkboxes were selected
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
    //sets the title of the workout based on checkbox state
    if (Upper === "TRUE" && Lower === "TRUE") {
        Title = "FULL BODY"
    } else if (Upper === "TRUE" && Lower === "FALSE") {
        Title = "UPPER BODY"
    } else if (Upper === "FALSE" && Lower === "TRUE") {
        Title = "LOWER BODY"
    } else {
        Title = "CARDIO"
    }
    //selects warmup based on checkbox state
    if (Title === "CARDIO") {
        Warmup1 = "JUMPING JACKS"
        Warmup2 = "JOG IN PLACE"
        Warmup3 = "BURPEES"
    } else if (Title === "UPPER BODY") {
        Warmup1 = "JOG IN PLACE"
        Warmup2 = "JUMPING JACKS"
        Warmup3 = "ARM CIRCLES"
    } else if (Title === "LOWER BODY") {
        Warmup1 = "JOG IN PLACE"
        Warmup2 = "HOP IN PLACE"
        Warmup3 = "SQUAT JUMP"
    } else if (Title === "FULL BODY") {
        Warmup1 = "JUMPING JACKS"
        Warmup2 = "SQUAT JUMP"
        Warmup3 = "REST + REPEAT"
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
                <Link to='/power-down'>
                    <img className='nav__power' src={Power} alt='button'></img>
                </Link>
                {props.inputProps.showInfo && (
                    <>
                        <img className='nav__arrow' src={ArrowR} alt='button'></img>
                        <section className='output'>
                            <div className='true-false'>
                                <div className='output__text'>
                                    <p className='output__text--special'>UPPER: {Upper}</p>
                                </div>
                                <div className='output__text'>
                                    <p className='output__text--special'>LOWER: {Lower}</p>
                                </div>
                                <div className='output__text'>
                                    <p className='output__text--special'>WEIGHTS: {Weights}</p>
                                </div>
                            </div>
                            <p className='output__text--special'>45 SECONDS / EXERCISE</p>
                            <h1>{Title} WORKOUT</h1>
                            <p className='output__text--special'>BEGIN WITH A LIGHT WARM-UP - NO WEIGHTS</p>
                            <div className='true-false'>
                                <p>{Warmup1}</p>
                                <p>{Warmup2}</p>
                                <p>{Warmup3}</p>
                            </div>
                            {props.inputProps.data.map(x => (
                                <div key={x.id}>
                                    <p className='output__text'>{x.name}</p>
                                </div>
                            ))}
                        </section>
                    </>
                )}
            </div>
        </section>
    )
}

export default InputForm