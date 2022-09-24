import React from "react";
import classes from './LeftBarSide.module.css';
import {Link } from "react-router-dom";
import side from '../../../../../public/Images/side.png'

const OptionLeftBarSide = (props) =>{
    return(
    
    <Link to={props.item.link}>
        
        <button className={classes.lbs__button_option}>
            {props.item.title}

        {(props.item.body===true)
            ?<img src={side} className = {classes.lbs__image}></img>
            :<img ></img>
        }
        </button>
        
    </Link>
    )
}
export default OptionLeftBarSide;