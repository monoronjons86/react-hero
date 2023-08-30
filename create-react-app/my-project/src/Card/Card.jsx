import React from 'react';
import Title from './Title';
import Price from './Price';

const Card = () => {
    const name="rokib"
    const myObj={
        name:"Hasan",
        age:22
    }
    return (
        <div>
            <Title></Title>
            <Price name={name} age={myObj.age}></Price>
            {/* <h2>{myObj.name}</h2>
            <h2>{myObj.age}</h2> */}
        </div>
    );
};

export default Card;