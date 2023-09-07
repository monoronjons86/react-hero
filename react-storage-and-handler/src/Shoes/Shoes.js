// import React from 'react';
// import { add, multiply } from '../utilities/Calculate';

// const Shoes = () => {
//     const first=13;
//     const second=11;
//     const result=multiply(first,second)
//     const sum=add(first,second)
//     return (
//         <div>
//             <h3>This is Shoes Compo</h3>
//             <p>{result} and {sum}</p>
//         </div>
//     );
// };

// export default Shoes;
import React from 'react';
import { multiply } from '../utilities/Calculate';

const Shoes = () => {
    const third=12;
    const fourth=2
    const avg=multiply(third,fourth)
    return (
        <div>
            <h1>this is shoes list</h1>
            <p>total:{avg}</p>
        </div>
    );
};

export default Shoes;