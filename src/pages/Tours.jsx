import React, {useEffect, useState} from 'react';
import {fetchData, getData} from "../utility.js";
import './Tours.css'
import {Card} from "../components/Card.jsx";
const url = 'https://raw.githubusercontent.com/mkatay/json-tours/main/tours'


export const Tours = () => {
    const [tours, setTours] = useState([])
    useEffect(() => {
        fetchData(url, setTours)
    }, []);
    console.log(tours)
    return (
        <div className='components-container'>
            <h2>Aktuális Utazások</h2>
            <div className='card-holder'>
                {tours.map(obj => <Card key={obj.id} {...obj}/>)}
            </div>
        </div>
    );
};