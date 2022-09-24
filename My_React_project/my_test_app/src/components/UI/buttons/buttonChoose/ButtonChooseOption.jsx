import React from 'react';
import classes from './ButtonChooseOption.module.css';
import triangle from './triangle.png'

const ButtonChooseOption = ({children, ...props}) =>{
    return(
        <button {...props} className = {classes.btn__choose_option}>
            <img src={triangle} className = {classes.btn__images}>
                </img>
            <div  className={classes.btn__choose_text}>
                {children}
            </div>
                
        </button>
    )
}
export default ButtonChooseOption;