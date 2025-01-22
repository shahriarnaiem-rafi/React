import React, { useEffect, useState } from 'react';
import ShowCountry from '../ShowCountry/ShowCountry';

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const url = 'https://restcountries.com/v3.1/all';
        console.log(url);
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setCountries(data)
        })
    }, []);
    return (
        <div>
            <h1>country count :{countries.length}</h1>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    countries.map(country => <ShowCountry key={country?.car?.cca3} countryData = {countryData}></ShowCountry>)
                }
            </div>
        </div>
    );
};

export default Home;