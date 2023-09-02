import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country.area)
    const{area,region,population,name}=props.country
    return (
        <div className='country'>
            {/* <h2>Country Name:{props.name}</h2>
            <h2>Population:{props.population}</h2>
            <p><small>Region:{props.region}</small></p>
            <p><small>Area:{props.area}</small></p> */}
            
            {/* <h3>Country Name:{props.country.name.common}</h3> */}
            {/* <p>Population:{props.country.population}</p> */}
            {/* <p><small>Region:{props.country.region}</small></p> */}
            {/* <p><small>Area:{props.country.area}</small></p> */}
            <h3>Country Name:{name.common}</h3>
            <p>Population:{population}</p>
            <p><small>Region:{region}</small></p> 
            <p><small>Area:{area}</small></p>

        </div>
    );
};

export default Country;