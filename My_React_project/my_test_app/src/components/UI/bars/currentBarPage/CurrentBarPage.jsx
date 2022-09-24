import React from "react";
import classes from './CurrentBarPage.module.css';

const CurrentBarPage = ({children}) =>{
    return(
        <button className={classes.cbr__bar}>
                {children}
        </button>
    )
}
export default CurrentBarPage;