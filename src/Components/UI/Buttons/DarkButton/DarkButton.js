import React from 'react';
import buttonStyles from './DarkButton.module.css';
const Darkbutton = (props) => {


    return (
        <button className={
            `${buttonStyles.button}
            ${buttonStyles[props.btnSize]}`
        }>
            {props.title}
        </button>
    );
}

export default Darkbutton;
