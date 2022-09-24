import React from "react";
import classes from './ButtonTopBarSide.module.css';

const ButtonTopBar = ({children, props}) =>{
    return(
        <div>

            <img src={props} className = {classes.btb__images}>
            </img>

            <div className={classes.bs__search_text}>
                {children}
            </div>
            
        </div>
    )
}
export default ButtonTopBar;