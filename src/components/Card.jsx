import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import './Card.css'
import {LazyLoadImage} from "react-lazy-load-image-component";
import placeHolderImage from '../assets/react.svg'

export const Card = ({id, image, name, info, price}) => {
    let truncatedInfo = info.substring(0,100);
    const navigate = useNavigate();
    return (
        <div className='card'>
            <LazyLoadImage className='card-img'
                           alt={name}
                           effect='blure'
                           src={image}
                           height={200}
                           placeholderSrc={placeHolderImage} />
            <div className='card-content'>
                <h3>{name}</h3>
                <p>{truncatedInfo}</p>
                <button onClick={()=> navigate('/traveller/tour/'+id)}>Details</button>
                {/*<NavLink to={'/traveller/tour/'+id}>Details2</NavLink>*/}
            </div>
        </div>
    )

}

