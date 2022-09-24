import React from "react";
import { useHistory } from "react-router-dom";
import ButtonDeleteOpenOffer from "../../buttons/buttonDelOpOffer/ButtonDeleteOpenOffer";
import classes from './OfferList.module.css';

const OfferItem = (props) =>{

    const router = useHistory()

    return(
    <div className={classes.ol__offer}>
        
        <hr className={classes.ol__hr}/>

        <ButtonDeleteOpenOffer
            onClick={() => router.push(`/offers/${props.item.id}`)}>
            Open
        </ButtonDeleteOpenOffer>

        {/* кнопка дл удаления оффера */}
        <ButtonDeleteOpenOffer
            onClick={() => props.remove(props.item)}>
            Remove
        </ButtonDeleteOpenOffer>

        <div className={classes.ol__title_text}>Number:</div>

        <div className={classes.ol__body_text}>
            {props.number}
        </div>

        <div className={classes.ol__title_text}>Company:</div>

        <div className={classes.ol__body_text}>
            {/* {props.item.company} */}
            {
                props.item.title.length > 150
                ? `${props.item.title.substring(0,150)}...`
                : props.item.title
                }
        </div>
        
        <div className={classes.ol__title_text}>Vacancy:</div>
        
        {props.item.body &&(
        <div className={classes.ol__body_text}>

                {/* {props.item.vacancy} */}
                {
                props.item.body.length > 150
                ? `${props.item.body.substring(0,150)}...`
                : props.item.body
                }

        </div>)}

        <div className={classes.ol__title_text}>Body:</div>
        
        {/* <div className={classes.ol__body_text}>
                {props.item.body}
        </div> */}
    </div>
    )
}
export default OfferItem;