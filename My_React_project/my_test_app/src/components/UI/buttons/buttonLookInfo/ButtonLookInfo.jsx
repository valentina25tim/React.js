import React from 'react';
import classes from './ButtonLookInfo.module.css';

const ButtonLookInfo = ({children, ...props}) =>{
    return(
        <button {...props} className = {classes.btn__look_info}>
            {children}
        </button>
    )
}
export default ButtonLookInfo;
