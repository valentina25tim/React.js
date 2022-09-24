import React from "react";
import classes from './ModalLogin.module.css';

const ModalLogin = ({children, visible, setVisible}) => {
  
    return (
        <div className={classes.ml__modal} >
            <div className={classes.ml__content} >
                {children}
            </div>
        </div>
    );
};
export default ModalLogin;