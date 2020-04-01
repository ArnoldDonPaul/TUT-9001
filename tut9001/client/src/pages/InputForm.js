import React, { Component } from 'react';
import InputFormComp from '../components/InputForm/InputForm'
import axios from 'axios';

//practicing passing states as prop from a parent to a child
export default class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInfo: false,
            upperWorkout: false,
            lowerWorkout: false,
            hasDumbbells: false,
            data: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleWorkoutTypeChanged = event => {
        let workoutType;
        switch (event.target.value) {
            case 'upper':
                workoutType = 'upperWorkout';
                break;
            case 'lower':
                workoutType = 'lowerWorkout';
                break;
            case 'yes':
                workoutType = 'hasDumbbells';
                break;
        }

        this.setState({ [workoutType]: event.target.checked });
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({
            showInfo: true,
        });

        let data = await axios.get(`http://localhost:8080/input-form`);
        let responseData = [...data];
        if (this.state.upperWorkout === false && this.state.lowerWorkout === false && this.state.hasDumbbells === false) {
            responseData = data.filter(category => category.category === "lower");
        } else if (this.state.upperWorkout === true && this.state.lowerWorkout === false && this.state.hasDumbbells === true) {
            responseData = data.filter(category => category.category === "upper");
        } else if (this.state.upperWorkout === false && this.state.lowerWorkout === true && this.state.hasDumbbells === true) {
            responseData = data.filter(category => category.category === "lower");
        } else if (this.state.upperWorkout === false && this.state.lowerWorkout === true && this.state.hasDumbbells === false) {
            responseData = data.filter(category => category.category === "lower");
        } else if (this.state.upperWorkout === true && this.state.lowerWorkout === false && this.state.hasDumbbells === false) {
            responseData = data.filter(category => category.BW === true);
        } else if (this.state.upperWorkout === true && this.state.lowerWorkout === true && this.state.hasDumbbells === false) {
            responseData = data.filter(category => category.weightsReq === false);
        }

        this.setState({ data: responseData });
    }

    render() {
        return (
                <InputFormComp
                    inputProps={this.state}
                    handleWorkoutTypeChanged={this.handleWorkoutTypeChanged}
                    handleSubmit={this.handleSubmit} />
        );
    }
}
