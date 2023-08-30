import React from 'react';

const Price = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.name}{props.age}</h1>
            <p>$1200</p>
            <img src="./img/im.jpg" alt="" />
        </div>
    );
};

export default Price;