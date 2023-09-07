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
import React, { useEffect, useState } from 'react';
import { add } from '../../utilities/Calculate';
import Shoes from '../../Shoes/Shoes';
import Cosmetic from '../Cosmetic/Cosmetic';
// import add from '../../utilities/Calculate';

const Cosmetics = () => {
    //my create
    // const cosmetics=[
    //     {id:1,name:"Alta",price:100},
    //     {id:2,name:"Palis",price:200},
    //     {id:3,name:"Malis",price:300},
    //     {id:4,name:"Balis",price:400},
    //     {id:5,name:"Nalis",price:500},
    // ]

  const cosmetics=[
        {
          "id": "64f93622a2b97e5170e2f4c8",
          "price": 40,
          "name": "Lindsey Monroe"
        },
        {
          "id": "64f93622783b7b59253a31eb",
          "price": 38,
          "name": "Hazel Wolf"
        },
        {
          "id": "64f93622bc07d6aaaac6fcae",
          "price": 22,
          "name": "Ferguson Daniel"
        },
        {
          "id": "64f93622fc6ee7e3d12639c5",
          "price": 28,
          "name": "Christi Hobbs"
        },
        {
          "id": "64f93622d5def62a2d8340a8",
          "price": 34,
          "name": "Claudette Blanchard"
        },
        {
          "id": "64f9362249737408e992dc19",
          "price": 26,
          "name": "Brigitte Villarreal"
        }
      ]


    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            {
                cosmetics.map(cosmetic=><Cosmetic
                key={cosmetic.id}
                cosmetic={cosmetic}
                ></Cosmetic>)
            }

        </div>
    );
};

export default Cosmetics;