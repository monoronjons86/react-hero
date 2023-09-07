import React from 'react';

const Cosmetic = (props) => {
    const {name,price,id}=props.cosmetic
    return (
        <div>
            {/* <h1>Buy this:{props.cosmetic.name}</h1>
            {/* <h2>Price:{props.cosmetic.price}</h2> */}
            {/* <p>Price:{props.cosmetic.price}</p> */}

            <h1>Buy this:{name}</h1>
            <h1>Price:{price}</h1>
            <p><small>Its has id:{id}</small></p>
        </div>
    );
};

export default Cosmetic;