import React, { Component } from 'react';
import Heading from '../Heading/Heading';
import '../TextInput/TextInput.css';
import Description from '../Description/Description';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    render() {
        return (
            <div className="TextInput">
            <Heading name="本文を入力" />
            <Description />
            <textarea onChange={this.props.textChange} ></textarea>
            </div>
        );
    }
}

export default TextInput;