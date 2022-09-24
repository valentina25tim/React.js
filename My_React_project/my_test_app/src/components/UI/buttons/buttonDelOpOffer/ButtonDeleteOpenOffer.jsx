import React from 'react';
import classes from './ButtonDeleteOpenOffer.module.css';

const ButtonDeleteOpenOffer = ({children, ...props}) =>{
    return(
        <button {...props} className = {classes.ol__btn_delete}>
            {children}
        </button>
    )
}
export default ButtonDeleteOpenOffer;
