import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Editor from './components/Editor/Editor';
import Slide from './components/Slide/SlideSlidesheet/SlideSlidesheet';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Editor />
      </div>
    );
  }
}



export default App;
