import React from 'react';
import '../SlideButton/SlideButton.css';

const SlideButton = (props) => {
  const onClick = () => {
    
  }
  return (
      <div className="SlideButton">
      <span onClick={onClick}>{props.name}</span>
    </div>
  );
}

export default SlideButton;