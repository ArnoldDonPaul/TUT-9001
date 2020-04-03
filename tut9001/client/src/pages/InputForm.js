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

        let response = await axios.get(`http://localhost:8080/input-form`);
        let workouts = response.data;
        //TODO:comeback to this satement.
        let filteredWorkouts = workouts.filter(workout => {
            if (this.state.upperWorkout && this.state.lowerWorkout && this.state.hasDumbbells) {
                return workout;
            } else if (this.state.upperWorkout && this.state.lowerWorkout) {
                return !workout.weightsReq;
            } else if (this.state.upperWorkout && this.state.hasDumbbells) {
                return workout.category === 'upper';
            } else if (this.state.lowerWorkout && this.state.hasDumbbells) {
                return workout.category === 'lower';
            } else if (this.state.upperWorkout) {
                return workout.category === 'upper' && !workout.weightsReq
            } else if (this.state.lowerWorkout) {
                return workout.category === 'lower' && !workout.weightsReq
            }
        });

        this.setState({ data: filteredWorkouts });
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
