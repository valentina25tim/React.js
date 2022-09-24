import React, { useState } from 'react';
import ButtonAddVacancy from '../../buttons/buttonAddVacancy/ButtonAddVacancy';
import ButtonLogin from '../../buttons/buttonLogin/ButtonLogin';
import InputAddNewVacancy from "../../inputs/addNewVacancy/InputAddNewVacancy";
import InputLogin from '../../inputs/inputLogin/InputLogin';
import classes from './AddVacancyForm.module.css';

const AddVacancyForm = ({create}) => {

    // НУЖНО после подключения к БД переписать поля (они в комментах)
    const [offer, setOffer] = useState({
        // company:'',
        // vacancy:'',
        // body: ''
        title: '', body: ''
    })

    const addNewOffer = (e) => {
      e.preventDefault();
      const newOffer = {
        ...offer, id: Date.now()
      }
      create(newOffer)
      setOffer({
          // company:'',
          // vacancy:'',
          // body:''
          title: '', body: ''
      })
  }

    return (
      <form className={classes.addvac__frame}>
        <div className={classes.addvac__form}>

        <h2 className={classes.addvac__title}>Creating new vacancy</h2>
        
        <div className={classes.addvac__div_input}>
          
            <InputLogin
              // value={offer.company}
              // onChange={e => setOffer({...offer, company: e.target.value})}
              value={offer.title}
              onChange={e => setOffer({...offer, title: e.target.value})}
              
              type="text" 
              placeholder=" Company"/>

           <InputLogin 
              // value={offer.vacancy}
              // onChange={e => setOffer({...offer, vacancy: e.target.value})}
              value={offer.body}
              onChange={e => setOffer({...offer, body: e.target.value})}
              type="text" 
              placeholder=" Vacancy"/>

            {/* <InputAddNewVacancy 
              value={offer.body}
              onChange={e => setOffer({...offer, body: e.target.value})}
              type="text" 
              placeholder=" Body"/> */}
           
            <ButtonLogin onClick={addNewOffer}>Add new vacancy</ButtonLogin>
        </div>
        </div>
        </form>
    );
};

export default AddVacancyForm;