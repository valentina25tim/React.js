import React from "react";
import classes from './ButtonPhoto.module.css';

const ButtonPhoto = ({icon, photo, options, children, ...props}) => {
    return(        
        <div {...props}>
            <div className={classes.bp__consist}>
                <img src={options} className = {classes.bp__images}/>
                {children}
            </div>

            <div className={classes.bp__consist}>
                <img src={icon} className = {classes.bp__frame}/>
                <img src={photo} className = {classes.bp__images}/>
            </div>

        </div>
    );
};
export default ButtonPhoto;
