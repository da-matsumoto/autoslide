import React, { Component } from 'react';
import Heading from '../Heading/Heading';
import '../TitleInput/TitleInput.css';

class TitleInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }

    render() {
        return (
            <div className="TitleInput">
            <Heading name="タイトルを入力" />
            <input onChange={this.props.titleChange} />
            </div>
        );
    }
}

export default TitleInput;