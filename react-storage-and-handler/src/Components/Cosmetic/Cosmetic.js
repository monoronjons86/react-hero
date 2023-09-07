import React from 'react';
import './Cosmetic.css'
import { addToDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    const {name,price,id}=props.cosmetic
    const addToCart=(id)=>{
        addToDb(id)
    }
    const addToCartWithParam=()=>addToCart(id)
    return (
        <div className='product'>
            {/* <h1>Buy this:{props.cosmetic.name}</h1>
            {/* <h2>Price:{props.cosmetic.price}</h2> */}
            {/* <p>Price:{props.cosmetic.price}</p> */}

            <h1>Buy this:{name}</h1>
            <h1>Price:{price}</h1>
            <p><small>Its has id:{id}</small></p>
            {/* <button onClick={addToCartWithParam}>Add to Cart</button>
            <button onClick={()=>addToCart(id)}>Add to Cart:shortCut</button> */}
            <button onClick={()=>addToCart(id)}>Add to th card</button>
        </div>
    );
};

export default Cosmetic;