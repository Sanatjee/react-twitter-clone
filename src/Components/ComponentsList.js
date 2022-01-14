import React from 'react';
import Bluebutton from './UI/Buttons/BlueButton/BlueButton';
import Darkbutton from './UI/Buttons/DarkButton/DarkButton';
import LightButton from './UI/Buttons/LightButton/LightButton';

const Componentslist = () => {
    return (
        <div>
            <Bluebutton title="Tweet" />
            <Darkbutton title="Tweet" />
            <LightButton title="Tweet" />
        </div>
    );
}

export default Componentslist;
