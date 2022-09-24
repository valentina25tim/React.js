import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PersonLinkPage from "../../../pages/personPage/PersonLinkPage";
import ModalPersonCard from "../../modals/modalPersonCard/ModalPersonCard";
import PersonItem from "./PersonItem";

const PersonList = ({persons, remove, open, visible, setVisible}) => {
    
    function handleSubmit(e) {
        e.preventDefault();}

    if (!persons.length){
        return(
            <h2 style={{textAlign:'center'}}>
                Don`t have candidates
            </h2>
        )
    }

    // надо сделать что-то? чтобы не через мап открывалась модалка. 
    // какой-нибудь обратный вызов 
    //или айдишник передавать в персонЛинкПейдж, а там с БД вытягивать данные

    return (

        <form onSubmit={handleSubmit}>
            <TransitionGroup>
                {persons.map((person, index )=> 
                    <CSSTransition
                    key={person.id}
                    timeout={500}
                    classNames="person"
                    type="submit"
                    >
                        <PersonItem 
                            remove={remove}
                            number={index + 1}
                            item={person}
                            open={open}
                            visible={visible} 
                            setVisible={setVisible}
                        />
                   </CSSTransition>)}
            </TransitionGroup>
        </form>
    );
};

export default PersonList;