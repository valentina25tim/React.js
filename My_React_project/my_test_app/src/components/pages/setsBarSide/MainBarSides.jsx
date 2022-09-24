import React from "react";
import CurrentBarPage from "../../UI/bars/currentBarPage/CurrentBarPage";
import LeftBarSide from "../../UI/bars/leftBarSide/LeftBarSide";
import TopBarSide from "../../UI/bars/topBarSide/TopBarSide";

const MainBarSides = ({children}) => {
    return (
        <div>
            <TopBarSide/>
        
            <div>
                <CurrentBarPage children={children}/>
            </div>
     
            <LeftBarSide/>
        </div>
    )
}

export default MainBarSides;