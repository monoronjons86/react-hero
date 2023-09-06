import React from 'react';

const DeviceDetials = (props) => {
    console.log(props)
    return (
        <div>
            <p>Its price is {props.price}</p>
        </div>
    );
};

export default DeviceDetials;