import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import OfferItem from "./OfferItem";

const OfferList = ({offers, remove}) => {
    
    if (!offers.length){
        return(
            <h2 style={{textAlign:'center'}}>
                Don`t have offers
            </h2>
        )
    }
    return (

        <div>
            <TransitionGroup>
                {offers.map((offer, index )=> 
                    <CSSTransition
                    key={offer.id}
                    timeout={500}
                    classNames="offer"
                    >
                        <OfferItem 
                            remove={remove}
                            number={index + 1}
                            item={offer} 
                        />
                   </CSSTransition>)}
            </TransitionGroup>
        </div>
    );
};

export default OfferList;