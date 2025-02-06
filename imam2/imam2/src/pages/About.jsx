import React, { useEffect, useState } from 'react';
import Country from './component/country';


const About = () => {
    const [countries,setCountry]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountry(data))
    },[])
    // useEffect(()=>{},[])
 
    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            <div>
                {   
                    countries.map(country => <Country cont = {country}></Country>)
                }
            </div>
        </div>
    );
};

export default About;