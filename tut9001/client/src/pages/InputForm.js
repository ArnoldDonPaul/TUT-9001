import React, { Component } from 'react';
import InputFormComp from '../components/InputForm/InputForm'
//practicing passing states as prop from a parent to a child
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
        });
    }
    handleChange2 = event => {
        this.setState({ boxLower: event.target.checked }, () => {
        });
    }
    handleChange3 = event => {
        this.setState({ boxYes: event.target.checked }, () => {
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
