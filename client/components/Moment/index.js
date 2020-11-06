import React  from 'react';
import Moment from 'react-moment';

const MomentHelper = ({ time }) => {
    return (
        <div>
             <Moment fromNow>{time}</Moment>
        </div>
    )
}

export default MomentHelper;
