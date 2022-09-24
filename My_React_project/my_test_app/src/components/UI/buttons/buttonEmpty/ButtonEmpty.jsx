import React from "react";

const ButtonEmpty = ({children, ...props}) =>{
    return(
        <button {...props} >
            {children}
        </button>
    )
}
export default ButtonEmpty;