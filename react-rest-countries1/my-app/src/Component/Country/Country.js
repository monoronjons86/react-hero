// import React from 'react';
// import './Country.css'

// const Country = (props) => {
//     return (
//         <div className='country'>
//             <h1>Country Name:{props.name}</h1>
//             <p>Population:{props.population}</p>
//             <p><small>Area:{props.area}</small></p>
//         </div>
//     );
// };

// export default Country;

import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country.population)
    const{area,region,flags}=props.country
    // console.log(props.country)
    return (
        <div className='country'>
            {/* <h1>Country:{props.country.population}</h1>
            <p>region:{props.country.region}</p>
            <p><small>Area:{props.country.area}</small></p> */}
             <img src={flags.png} alt="" />
            <p>Area:{area}</p>
            <p>Region:{region}</p>



        </div>
    );
};

export default Country;