import React from 'react';
import classes from './ButtonAddVacancy.module.css';

const ButtonAddVacancy = ({children, ...props}) =>{
    return(
        <button {...props} className = {classes.bav__add}>
            {children}
        </button>
    )
}
export default ButtonAddVacancy;