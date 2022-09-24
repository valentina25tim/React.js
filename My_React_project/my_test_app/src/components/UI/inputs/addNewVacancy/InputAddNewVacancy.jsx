import React, { useState } from 'react';
import classes from './AddNewVacancy.module.css';


const InputAddNewVacancy = React.forwardRef((props, ref) => {
    return(
        
        <input ref={ref}className={classes.anv__input} {...props}/>
    );
});
export default InputAddNewVacancy;