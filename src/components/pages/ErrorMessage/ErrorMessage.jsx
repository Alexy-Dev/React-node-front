import React from 'react';
import './errorMessage.css';
import img from './error.jpg';

const ErrorMessage = () => {
    return (
        <div className='error_message'>
            <span>Something goes wrong.</span>
            <span>Check the Link please!</span>
            <img src={img} alt='error'></img>            
        </div>
    )
}

export default ErrorMessage;