import React, { Component } from 'react';
import InputFormComp from '../components/InputForm/InputForm'

export default class InputForm extends Component {
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
            console.log("upper returned", this.state.boxUpper);
        });
    }
    handleChange2 = event => {
        this.setState({ boxLower: event.target.checked }, () => {
            console.log("lower returned", this.state.boxLower);
        });
    }
    handleChange3 = event => {
        this.setState({ boxYes: event.target.checked }, () => {
            console.log("yes returned", this.state.boxYes);
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
            <>
                <InputFormComp
                    inputProps={this.state}
                    handleChange1={this.handleChange1}
                    handleChange2={this.handleChange2}
                    handleChange3={this.handleChange3}
                    handleSubmit={this.handleSubmit} />
            </>
        );
    }
}
