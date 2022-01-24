import React from 'react';
import CircleImage from '../../UI/Images/CircleImage/CircleImage';

import classes from './Tweet.module.css'
import '../../../App.css';

const Tweet = () => {
    return (
        <div className="displayFlex">
            <div>
                <CircleImage />
            </div>
            <div>
                <a>
                    Computer programming (Topic)
                    .
                    <a>See More</a>
                </a>
                <div>
                    <a>
                        Sanat Gawade (Name)
                    </a>
                    <a>
                        @sanatjee (userame)
                    </a>
                </div>
                <p>Tweet by user</p>

                <p>Image</p>

            </div>
        </div>
    );
}

export default Tweet;
