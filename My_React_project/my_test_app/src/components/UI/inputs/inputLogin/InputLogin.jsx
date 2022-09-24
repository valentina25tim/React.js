import React, { useState } from 'react';
import classes from './InputLogin.module.css';


const InputLogin = React.forwardRef((props, ref) => {
    return(
        
        <input ref={ref}className={classes.anv__input} {...props}/>
    );
});
export default InputLogin;