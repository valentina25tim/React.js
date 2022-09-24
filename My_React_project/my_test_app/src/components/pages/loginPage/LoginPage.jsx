import React, { useContext,useState } from "react";
import { useForm } from "react-hook-form"; 
import { Link } from "react-router-dom";
import { AuthorizContext } from "../../../context";
import ButtonEmpty from "../../UI/buttons/buttonEmpty/ButtonEmpty";
import ButtonLogin from "../../UI/buttons/buttonLogin/ButtonLogin";
import InputLogin from "../../UI/inputs/inputLogin/InputLogin";
import classes from './LoginPage.module.css';

// const FormData = {
//     login: 'text',
//     password: 'password',
//    };

const LoginPage = () => {

    const {isAuthoriz, setIsAuthoriz} = useContext(AuthorizContext)
    
    const {
        register,
        handleSubmit,formState:  { errors },
    } = useForm({mode: 'onBlur'});

    const login = event => {
        event.preventDefault();
        setIsAuthoriz(true);
        localStorage.setItem('auth', 'true')
    }
    
    return (  
    
    <form className={classes.login__frame}onSubmit={login}>

        <div className={classes.login__form}>

            <h2 className={classes.login__title}>
                please, before we start...
            </h2>

           <hr className={classes.login__horiz}/>

           <div className={classes.login__div_input}>
                <h2 className={classes.login__text_inside}>input login:</h2>
                
                <InputLogin  placeholder=''
                    type="text"
                    minLength = '6'
                    maxLength = '24'
                    {...register("login",{
                        required : 'true',
                        minLength : 6,
                        maxLength : 24
                        })
                    }
                />
                {errors.login?.type === "minLength" && 
                    <h2 className={classes.login__text_error}>
                        The content must be at least 50 characters
                    </h2>}
               
                
                <h2 className={classes.login__text_inside}>input password:</h2>
                
                <InputLogin placeholder=''
                    type="password"
                    minLength = '6'
                    maxLength = '24'
                    {...register("password",{
                        required : 'true',
                        minLength : 6,
                        maxLength : 24
                        })
                    }
                />
                {errors.password?.type === "minLength" && 
                    <h2 className={classes.login__text_error}>
                        The content must be at least 50 characters
                    </h2>}
               
                {console.log(isAuthoriz)}
                
            </div>
            
            <div className={classes.button_div_under}>
                <h2 className={classes.login__question}>
                    Don`t have a registration?
                </h2>
            </div>

            <div className={classes.button_div}>
                <ButtonLogin>GO</ButtonLogin>
            </div>

            

            <form onSubmit={login}>
                <Link  to="/registration" >
                    <ButtonEmpty className={classes.login__link_text}>
                        link to registration
                    </ButtonEmpty>
                </Link>
            </form>

        </div>
        
    </form>
    )
        
}

export default LoginPage;