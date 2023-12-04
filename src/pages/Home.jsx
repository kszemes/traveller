import React, {useEffect, useState} from 'react';

export const Home = () => {
    const [isAnimated, setIsAnimated] = useState(false);
    useEffect(() => {
        const id = setTimeout(() => setIsAnimated(true), 500);
        return () => {
            clearTimeout(id)
        }
    }, []);
    const animatedStyle = {
        opacity: isAnimated ? 1 : 0,
        position: 'absolute',
        bottom: '50%',
        left: '50%',
        transform: `translate(-50%, -50%) ${isAnimated ? 'translateX(0)' : 'translateX(-100px)'}`,
        transition: 'opacity 1s, transform 1s'
    }
    return (
        <div>
            <h1 className='text-gradient' style={animatedStyle}>Discover the world!</h1>
        </div>
    );
};
