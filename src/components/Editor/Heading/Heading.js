import React from 'react';
import '../Heading/Heading.css'

const Heading = (props) => {
    return (
        <div className="Heading">
            <h2>{props.name}</h2>
            <hr />
        </div>
    );
}

export default Heading;