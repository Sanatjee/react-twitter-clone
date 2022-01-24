import React from 'react';

import RoundedCornerImage from '../../UI/Images/RoundedCornerImage/RoundedCornerImage';

import classes from './Happening.module.css'
import '../../../App.css';

const Happening = () => {
    return (
        <div className={classes.happeningContainer}>
            <div className={classes.Info}>
                <p className="greyText">Category + Islive or Time</p>
                <p className="bold-500">Stock market: Here are all the updates of the week</p>
                <p className="greyText">Promoted</p>
                <p className="greyText">Trending with
                    <span className="blueTextContainer">
                        <a href="#">
                            #marketcrash
                        </a>
                        ,
                        <a href="#">
                            #Nifty
                        </a>
                    </span>
                </p>
            </div>
            <div className={classes.action}>
                <RoundedCornerImage />
            </div>

        </div>
    );
}

export default Happening;
