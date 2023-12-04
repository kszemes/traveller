import {NavLink, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchData} from "../utility.js";
const url = 'https://raw.githubusercontent.com/mkatay/json-tours/main/tours'
import './Tour.css'
import {LazyLoadImage} from "react-lazy-load-image-component";
import placeHolderImage from '../assets/react.svg'

export const Tour = () => {

    const param = useParams();
    const [tour, setTour] = useState(null);
    useEffect(() => {
        fetchData(url, setTour, param.id)
    }, []);
    return (
        <div className='tour-container'>
            {tour && <div className='tour-holder'>
                <h3>{tour.name}</h3>
                <LazyLoadImage className='tour-img'
                    alt={tour.name}
                    effect='blure'
                    src={tour.image}
                    placeholderSrc={placeHolderImage} />
                <p>{tour.info}</p>
                <p>{tour.price}</p>
                <NavLink to='/traveller/tours'>
                    <button>Back</button>
                </NavLink>
            </div>}
        </div>
    );
};