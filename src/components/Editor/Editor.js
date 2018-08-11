import React, { Component } from 'react';
import Logo from '../Editor/Logo/Logo';
import SlideButton from '../Editor/SlideButton/SlideButton';
import TitleInput from './TitleInput/TitleInput';
import TextInput from './TextInput/TextInput';
import EditorSlidesheet from './EditorSlidesheet/EditorSlidesheet';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'タイトル',
            text: 'ページタイトル\n\n\n本文'
        };
    }

    titleChange = (event) => {
        this.setState({title:event.target.value});
    }
    textChange = (event) => {
        this.setState({text:event.target.value});
    }

    render() {
        return (
            <div className="Editor">
                <div className="header">
                <Logo />
                </div>
                <div className="main">
                    <div className="leftarea">
                    <TitleInput titleChange={this.titleChange}/>
                    <TextInput textChange={this.textChange}/>
                    </div>
                    <div className="rightarea">
                    <EditorSlidesheet title={this.state.title} text={this.state.text}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Editor;