import React, { useState } from "react";
import classes from './LeftBarSide.module.css';
import OptionLeftBarSide from "./OptionLeftBarSide";

const LeftBarSide = (props) =>{

    // эти маршруты с link добавить в Router и прикрепить page. 
    // можно сделатьь разные файлики для роута топБар, лефтБар тд
    const [items, setItems] = useState([
        {title: 'Vacancy List(comp/vac)', body: true, link: "/offers"},
        {title: 'Start searching Candidate', body: false, link: "/search"},
        {title: 'Get result and filtred', body: false, link: "/result"},
        {title: 'Candidates List for offer', body: false, link: "/candidates"},
        {title: '??? smsing', body: false, link: "/smsing"}
    ])

    return(
        <div className={classes.lbs__barside}>
           <div className={classes.lbs__stripe}></div>

           {items.map(item =>
            <OptionLeftBarSide key={item.title} item={item} body={item.body} link={item.link} />
            )}
        </div>
    );
};
export default LeftBarSide;