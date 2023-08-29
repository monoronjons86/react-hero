import React from 'react';
import Title from './Title';
import Price from './Price';

const Card = () => {
    return (
        <div style={{
            backgroundColor:"red"
        }}>
            <Title></Title>
            <Price></Price>
        </div>
    );
};

export default Card;