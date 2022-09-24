import React from 'react';
import classes from './Button.module.css';

const ButtonStart = ({children, ...props}) =>{
    return(
        <button {...props} className = {classes.btn__start}>
            {children}
        </button>
    )
}

export default ButtonStart;
