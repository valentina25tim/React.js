import React from 'react';
import classes from './ButtonLogin.module.css';

const ButtonLogin = ({children, ...props}) =>{
    return(
        <button {...props} className = {classes.btn__login}>
            {children}
        </button>
    )
}
export default ButtonLogin;
