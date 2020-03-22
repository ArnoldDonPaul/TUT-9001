import React, { Component } from 'react';
import InputFormComp from '../components/InputForm/InputForm'
import axios from 'axios';

//practicing passing states as prop from a parent to a child
export default class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInfo: false,
            boxUpper: false,
            boxLower: false,
            boxYes: false,
            data: []
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
            showInfo: true,
        });
        if (this.state.boxUpper === true && this.state.boxLower === true && this.state.boxYes === true) {
            axios
                .get(`http://localhost:8080/input-form`)
                .then(response => {
                    this.setState({
                        data: response.data
                    });
                }
                )
        } else if (this.state.boxUpper === false && this.state.boxLower === false && this.state.boxYes === false) {
            axios
                .get(`http://localhost:8080/input-form`)
                .then(response => {
                    const responseData = response.data.filter(category => category.category === "lower");
                    console.log(responseData)
                    this.setState({
                        data: responseData
                    });
                }
                )
        } else if (this.state.boxUpper === true && this.state.boxLower === false && this.state.boxYes === true) {
            axios
                .get(`http://localhost:8080/input-form`)
                .then(response => {
                    const responseData = response.data.filter(category => category.category === "upper");
                    console.log(responseData)
                    this.setState({
                        data: responseData
                    });
                }
                )
        } else if (this.state.boxUpper === false && this.state.boxLower === true && this.state.boxYes === true) {
            axios
                .get(`http://localhost:8080/input-form`)
                .then(response => {
                    const responseData = response.data.filter(category => category.category === "lower");
                    console.log(responseData)
                    this.setState({
                        data: responseData
                    });
                }
                )
        } else if (this.state.boxUpper === false && this.state.boxLower === true && this.state.boxYes === false) {
            axios
                .get(`http://localhost:8080/input-form`)
                .then(response => {
                    const responseData = response.data.filter(category => category.category === "lower");
                    console.log(responseData)
                    this.setState({
                        data: responseData
                    });
                }
                )


        } else if (this.state.boxUpper === true && this.state.boxLower === false && this.state.boxYes === false) {
            axios
                .get(`http://localhost:8080/input-form`)
                .then(response => {
                    const responseData = response.data.filter(category => category.category === "lower");
                    console.log(responseData)
                    this.setState({
                        data: responseData
                    });
                }
                )
        } else if (this.state.boxUpper === true && this.state.boxLower === true && this.state.boxYes === false) {
            axios
                .get(`http://localhost:8080/input-form`)
                .then(response => {
                    const responseData = response.data.filter(category => category.category === "lower");
                    console.log(responseData)
                    this.setState({
                        data: responseData
                    });
                }
                )
        }

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
