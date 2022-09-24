import React from 'react';
import classes from './ButtonLookResult.module.css';

const ButtonLookResult= ({children, ...props}) =>{
    return(
        <button {...props} className = {classes.btn__look_result}>
            {children}
        </button>
    )
}
export default ButtonLookResult;
