import React from "react";
import classes from './SelectCurOffer.module.css';
import loop from './loop.png';
import mark from './mark.png';
import triangle from './triangle.png';

const SelectCurOffer = ({options, defaultValue, value, onChange}) => {
    return (
        <div>
            <img src={mark} className = {classes.sco__mark}/>

            <select className={classes.sco__select}
          value={value}
          onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                    <img src={loop} className = {classes.sco__image}></img>
                </option>)
            }
       </select>

            {/* <img src={loop} className = {classes.sco__tria}/>
            <img src={triangle} className = {classes.sco__tria}/> */}
       </div>
    );
};
export default SelectCurOffer;