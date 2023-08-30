import React from 'react';

const Basic = () => {
    let count=0;
    const handleCount=()=>{
        console.log(count+1)
    }
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={handleCount} className='btn1'>+</button>
            <button className='btn2'>-</button>
        </div>
    );
};

export default Basic;