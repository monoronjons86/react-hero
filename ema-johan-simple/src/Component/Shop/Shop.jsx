import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const[product,setProduct]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div className='shop-container'>
            <div className='product-container'>
                <h2>product coming here{product.length}</h2>
            </div>
            <div className='cart-container'>
                <h4>Order summary</h4>
            </div>
        </div>
    );
};

export default Shop;