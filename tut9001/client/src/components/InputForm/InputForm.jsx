import React from 'react';
import { Link } from 'react-router-dom';
import TUT from '../../assets/talking.gif';
import Power from '../../assets/power.png';
import ArrowD from '../../assets/arrow-down.png';

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
        Weights = " - WEIGHTS"
    } else {
        Weights = " - BODYWEIGHT"
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
                        <div className='checkbox-box'>
                            <div className='option-box'>
                                <input type="checkbox" className='option-box__box' name="upper" value="upper" onChange={props.handleChange1}></input>
                                <label for="upper" className='option-box__text'> UPPER BODY</label>
                            </div>
                            <div className='option-box'>
                                <input type="checkbox" className='option-box__box' name="lower" value="lower" onChange={props.handleChange2}></input>
                                <label for="upper" className='option-box__text'> LOWER BODY</label>
                            </div>
                        </div>
                        <p className='terminal__text'>>> DO YOU HAVE ACCESS TO DUMBBELLS?</p>
                        <div className='checkbox-box'>
                            <div className='option-box'>
                                <input type="checkbox" className='option-box__box' name="yes" value="yes" onChange={props.handleChange3}></input>
                                <label for="yes" className='option-box__text'> YES</label>
                            </div>
                        </div>
                        <p className='terminal__text'>>> READY TO RECEIVE YOUR WORKOUT?</p>
                        <input type='submit' value='CONFIRM' className='terminal__button'></input>
                    </form>
                    <div className='result-box'>
                        {props.inputProps.showInfo && (
                            <>
                                <p className='terminal__text--special'>>> [EXERCISE ROUTINE GENERATED]</p>
                            </>
                        )}
                    </div>
                </div>
                <Link to='/power-down'>
                    <img className='nav__power' src={Power} alt='button'></img>
                </Link>
                {props.inputProps.showInfo && (
                    <>
                        <img className='nav__arrow' src={ArrowD} alt='button'></img>
                        <img className='nav__arrow--leftside' src={ArrowD} alt='button'></img>
                        <section className='output'>
                            <div className='output__box'>
                                <h1 className='output__header'>{Title} WORKOUT {Weights}</h1>
                            </div>
                            <p className='output__instruction'>WARM-UP: 1 MINUTE EACH</p>
                            <p className='output__warmup--output'>{Warmup1}</p>
                            <p className='output__warmup--output'>{Warmup2}</p>
                            <p className='output__warmup--output'>{Warmup3}</p>
                            <div className='output__inline'>
                                <p className='output__instruction--warmup'>45 SECONDS WORK</p>
                                <p className='output__instruction--warmup'>|</p>
                                <p className='output__instruction--warmup'>20 SECONDS REST</p>
                            </div>
                            {props.inputProps.data.map(x => (
                                <div key={x.id}>
                                    <p className='output__exercise'>{x.name}</p>
                                </div>
                            ))}
                            <p className='output__instruction'>REPEAT 3 OR 4 TIMES TODAY</p>
                        </section>
                    </>
                )}
            </div>
        </section>
    )
}

export default InputForm