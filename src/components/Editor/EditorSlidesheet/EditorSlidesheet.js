import React from 'react';
import SlideTitle from './SlideTitle/SlideTitle';
import PageText from './PageText/PageText';
import '../EditorSlidesheet/EditorSlidesheet.css';

const EditorSlidesheet = (props) => {
    return (
        <div className="EditorSlideSheet">
        <SlideTitle title={props.title}/>
        <PageText text={props.text} />
        </div>
    );
}

export default EditorSlidesheet;