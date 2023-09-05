// import React, { useEffect, useState } from 'react';
// import Country from '../Country/Country';

// const Countries = () => {
//     const[countries,setCountries]=useState([])
//     useEffect(()=>{
//         fetch('https://restcountries.com/v3.1/all')
//         .then(res=>res.json())
//         .then(data=>setCountries(data))
//     },[])
//     return (
//         <div>
//             <h1>Hello from countries.{countries.length}</h1>
//             {
//                 countries.map(country=><Country name={country.name.common} population={country.population} area={country.area}></Country>)
//             }
//             {
//                 countries.map(country=>console.log(country))
//             }
//         </div>
//     );
// };

// export default Countries;

import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const[countries,setCountries]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div >
            <h1>this is my first practice.{countries.length}</h1>
            {
                countries.map(country=>console.log(country))
            }
            <div className='countries-container'>
                {
                    countries.map(country=><Country 
                        country={country}
                        //  name={country.name.common}
                        //   region={country.region}
                         ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;