import React, { useState } from "react";
import { useEffect } from "react";
import PersonLinkPage from "../../../pages/personPage/PersonLinkPage";
import ButtonDeleteOpenOffer from "../../buttons/buttonDelOpOffer/ButtonDeleteOpenOffer";
import ButtonEmpty from "../../buttons/buttonEmpty/ButtonEmpty";
import ModalPersonCard from "../../modals/modalPersonCard/ModalPersonCard";
import classes from './PersonItem.module.css';

const PersonItem = (props) =>{

    const [activeLink, setActiveLink] = useState(false)

    const noUpdate = (e) => {
        e.preventDefault();
    }

    const openModal = () => {
        setActiveLink(true)
        props.setVisible(true)
    }
    

    return(

    <form className={classes.pi__form} >

        {/* чертёж таблицы */}
        
        <hr className={classes.pi__table_v1}/>
        <hr className={classes.pi__table_v2}/>
        <hr className={classes.pi__table_v3}/>
        <hr className={classes.pi__table_v4}/>
        <hr className={classes.pi__table_v5}/>
        <hr className={classes.pi__table_v6}/>
        <hr className={classes.pi__table_v7}/>
        <hr className={classes.pi__table_v8}/>
        <hr className={classes.pi__table_hr}/>
        <hr className={classes.pi__table_hr_last}/>

        {/* содержимое таблицы */}


        <div className={classes.pi__col1}>
            {props.number}
        </div>


        <form  onClick={noUpdate}>
            {/* это переключение на ккарточку персона */}
            <div className={classes.pi__col2} >
                <ButtonEmpty onClick={() => openModal()}
                    className={activeLink === true
                        ? classes.pi__text_link_active
                        : classes.pi__text_link}
                >
                    {props.item.name}
                </ButtonEmpty>
            </div>

            {activeLink === true
                ?
                <ModalPersonCard
                    visible={props.visible}
                    setVisible={props.setVisible}>
                        <PersonLinkPage item={props.item} />
                </ModalPersonCard>
                :
                activeLink === false
            }
        </form>


        <div className={classes.pi__col3}>
            {props.item.address.street}
        </div>

        <div className={classes.pi__col4}>
            {props.item.email}
        </div>

        <div className={classes.pi__col5}>
            {props.item.address.street}
        </div>

        <div className={classes.pi__col6}>
            {props.item.email}
        </div>

        <div className={classes.pi__col7}>
            {props.item.address.street}
        </div>

        <div className={classes.pi__col8}>
            {props.item.email}
        </div>


        <form className={classes.pi__col9} onClick={noUpdate}>
            {/* кнопка для удаления персона - хочу изменить на селект(дефолтно - в процессе, 
                переключаться на удалить и добавить в список для дальнейшей работы)) */}
                <ButtonDeleteOpenOffer
                onClick={() => props.remove(props.item)}
                    >
                    Remove
                </ButtonDeleteOpenOffer>
        </form>

    </form>
    )
}
export default PersonItem;