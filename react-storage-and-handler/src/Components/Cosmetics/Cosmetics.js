// import React from 'react';
// // import add from '../../utilities/Calculate';
// import Shoes from '../../Shoes/Shoes';
// import { add } from '../../utilities/Calculate';

// const Cosmetics = () => {
//     const first=55;
//     const second=66;
//     const total=add(first,second)
//     return (
//         <div>
//             <h1>Welcome to my cosmetics store</h1>
//             <p>total:{total}</p>
//             <Shoes></Shoes>
//         </div>
//     );
// };

// export default Cosmetics;
import React from 'react';
import { add } from '../../utilities/Calculate';
import Shoes from '../../Shoes/Shoes';
// import add from '../../utilities/Calculate';

const Cosmetics = () => {
    const first=34;
    const second=25;
    const total=add(first,second)
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>{total}</p>
            <Shoes></Shoes>
        </div>
    );
};

export default Cosmetics;