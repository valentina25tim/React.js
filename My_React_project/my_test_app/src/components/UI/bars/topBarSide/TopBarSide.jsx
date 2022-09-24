import React, { useContext } from 'react';
import classes from './TopBarSide.module.css';
import InputSearchOnSite from '../../inputs/inputSearchOnSite/InputSearchOnSite';
import ButtonTopBar from '../../buttons/buttomTopBarSide/ButtonTopBar';
import ButtonPhoto from '../../buttons/buttonPhoto/ButtonPhoto';
import appName from '../../../../../public/Images/appName.png'
import home from '../../../../../public/Images/home.png'
import notice from '../../../../../public/Images/notice.png'
import chats from '../../../../../public/Images/chats.png'
import user from '../../../../../public/Images/user.png'
import options from '../../../../../public/Images/options.png'
import icon from '../../../../../public/Images/icon.png'
import {Link } from "react-router-dom";

import { AuthorizContext } from '../../../../context';

const TopBarSide = ({...props}) =>{

    const {isAuthoriz, setIsAuthoriz} = useContext(AuthorizContext)
    
    const login = event => {
        event.preventDefault();
        setIsAuthoriz(false);
    }
    const logout = () => {
        setIsAuthoriz(false)
        localStorage.removeItem('auth')
    }
    return(
        <button {...props} className = {classes.tbs__top_bar}>

            {/* картинка  InSearher */}
            <img src={appName} className = {classes.tbs__photo_app}/>
            
            {/* поиск по всему сайту */}
            <div  className = {classes.tbs__search}>
                <InputSearchOnSite placeholder="Search"/>            
            </div>

            {/* добавить что-то что отслеживает ширину экрана и задать условие 
            if (screen.weigh<=700 px) => поставить кнопку(три точки, откуда отдельным окошком будут 
                доступны серчь, хом, чат, нотис )
            else => все кнопки доступны(растояние между ними уже по %)*/}

            {/* иконка пользователя + опций- выйти...тд */}
            <div onClick={login} className={classes.tbs__home_notice_chat} style={{marginRight: 13}}>
                <ButtonPhoto  
                    icon={icon}
                    photo={user}
                    options={options}
                    onClick={logout}/>
            </div>

            {/* ниже кнопки Home Chats Notice */}
            <div className={classes.tbs__home_notice_chat}><ButtonTopBar props={chats}>Chats</ButtonTopBar></div>
            
            <div className={classes.tbs__home_notice_chat}><ButtonTopBar props={notice}>Notices</ButtonTopBar></div>
            
            <div className={classes.tbs__home_notice_chat}>
                <Link to="/home">
                    <ButtonTopBar props={home}>
                        Home
                    </ButtonTopBar>
                </Link>
            </div>
            

            {/*  ЭТО ВЫХОД В ЛОГИН С КНОПКИ 
             <form onSubmit={login} className={classes.tbs__home_notice_chat}>
                    {/* это кнопка выйти- нужен другой стиль */}
                    {/* <ButtonStart onClick={logout}>
                        go out
                    </ButtonStart>
                    {console.log(isAuthoriz)}
            </form> */} 
            

            
        </button>
    )
}
export default TopBarSide;