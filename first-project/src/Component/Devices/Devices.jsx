import React from 'react';
import DeviceDetials from '../DeviceDetials/DeviceDetials';

const Devices = (props) => {
    console.log(props)
    return (
        <div>
            <h1>I have a device.{props.name}</h1>
            <DeviceDetials price={props.price}></DeviceDetials>
        </div>
    );
};

export default Devices;