import React, { useState } from 'react';
import classes from './InputSearchOnSite.module.css';
import loop from './loop.png';

const InputSearchOnSite = ({...props}) =>{

    const [search, setSearch] = useState ('Search')
    
    return(
        
    <div>
        <input className={classes.bs__search_button}
          type= "text"
          value={search}
          onChange={event => setSearch(event.target.value)}
         />

        <img src={loop} className = {classes.bs__search_image}></img>  
    </div>
    );
};
export default InputSearchOnSite;