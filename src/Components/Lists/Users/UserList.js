import React from 'react';
import Darkbutton from '../../UI/Buttons/DarkButton/DarkButton';
import CircleImage from '../../UI/Images/CircleImage/CircleImage';

import classes from './UserList.module.css';
import '../../../App.css';

const UserList = () => {
    return (
        <div >
            <div className={classes.userListContainer}>
                <div className={classes.Image}>
                    <CircleImage />
                </div>
                <div className={classes.Info}>
                    <p className="bold-500">Sanat Gawade <span> Verified</span></p>
                    <p className="greyText">@SanatJee</p>
                    <p className={classes.promoted}>Promoted</p>
                </div>
                <div className={classes.action}>
                    <Darkbutton
                        title="Follow"
                        btnSize="btnSm"
                    />
                </div>
            </div>
        </div>
    );
}

export default UserList;
