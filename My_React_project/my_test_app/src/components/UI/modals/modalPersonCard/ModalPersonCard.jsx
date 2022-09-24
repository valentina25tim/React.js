import React from "react";
import classes from './ModalPersonCard.module.css';

const ModalPersonCard = ({children, visible, setVisible}) => {
    
    const rootClasses= [classes.mpc__content]

    if(visible){
        rootClasses.push (classes.mpc__active)
    }

    return (
        <div>

            <button className={classes.mpc__close} onClick = {() => setVisible(false)}/>
            
            <div className={rootClasses.join(' ')} > 
                {children}
            </div>

        </div>
         
    );
};
export default ModalPersonCard;