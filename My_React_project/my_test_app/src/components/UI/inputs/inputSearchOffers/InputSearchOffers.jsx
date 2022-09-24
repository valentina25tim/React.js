import React, { useState } from 'react';
import classes from './InputSearchOffers.module.css';
import loop from './loop.png';

const InputSearchOffer = React.forwardRef((props, ref)=>{
    return(
        <div>
            <input  
                ref={ref} 
                className={classes.bso__search_button}
                {...props} 
            />
             <img src={loop} className = {classes.bso__search_image}></img>
        </div> 
    );
});
export default InputSearchOffer;