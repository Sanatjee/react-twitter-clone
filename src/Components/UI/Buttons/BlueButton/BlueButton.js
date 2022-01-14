import React from 'react';
import buttonStyles from './BlueButton.module.css';

const Bluebutton = (props) => {
    return (
        <button className={buttonStyles.button}>
            {props.title}
        </button>
    );
}

export default Bluebutton;
