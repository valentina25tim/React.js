import React from "react";
import MainBarSides from "../setsBarSide/MainBarSides";

const ErrorPage = () => {
    return (
        <div>
            <MainBarSides>ERROR</MainBarSides>
            
            <h2 style={{collor: 'red'}}>
                {/* NEED TODO */}
                Error: this page does not exist
            </h2>
        </div>
    )
}

export default ErrorPage;