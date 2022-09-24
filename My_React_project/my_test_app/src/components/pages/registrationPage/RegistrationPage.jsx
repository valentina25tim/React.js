import React, { useContext } from "react";
import { AuthorizContext } from "../../../context";
import ButtonLogin from "../../UI/buttons/buttonLogin/ButtonLogin";

const RegistrationPage = () => {
   
    const {isAuthoriz, setIsAuthoriz} = useContext(AuthorizContext)
   
    const login = event => {
        event.preventDefault();
        setIsAuthoriz(true);
        localStorage.setItem('auth', 'true')
    }
    return (
        <form onSubmit={login}>
           
            <h2>
                Registration Page 
            </h2>

            <h4>
                form wiht inputs... etc
            </h4>
            <ButtonLogin>GO</ButtonLogin>
        </form>

    );
};

export default RegistrationPage;