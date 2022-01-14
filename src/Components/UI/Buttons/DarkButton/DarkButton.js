import React from 'react';
import buttonStyles from './DarkButton.module.css';
const Darkbutton = (props) => {
    return (
        <button className={buttonStyles.button}>
            {props.title}
        </button>
    );
}

export default Darkbutton;
