import React from 'react';
import buttonStyles from './LightButton.module.css';

const LightButton = (props) => {
    return (
        <button className={buttonStyles.button}>
            {props.title}
        </button>
    );
}

export default LightButton;
