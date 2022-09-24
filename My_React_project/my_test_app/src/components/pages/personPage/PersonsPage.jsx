import React, { useState, useMemo, useEffect, useReducer, useRef } from 'react';
import LoaderOfferList from '../../UI/loaders/loaderOffersList/LoaderOfferList';
import OffersPagination from '../../UI/paginations/paginationOffers/OffersPagination';
import { usePersons } from '../../../hook/hookPersons/UsePersons';
import { useFetching } from '../../../hook/hookOffers/UseFetching';
import { getCountPages, getPagesArray } from '../../utils/utilOffers/CountPages';
import MainBarSides from '../setsBarSide/MainBarSides';
import classes from './PersonsPage.module.css';
import PersonService from '../../../API/services/PersonService';
import PersonList from '../../UI/items/personList/PersonList';
import SelectCurOffer from '../../UI/select/selectCurOffer/SelectCurOffer';
import ButtonLookInfo from '../../UI/buttons/buttonLookInfo/ButtonLookInfo';
import ButtonLookResult from '../../UI/buttons/buttonLookResult/ButtonLookResult';
import BottomBar from '../../UI/bars/buttomBar/BottomBar';


const PersonsPage = () => {
 
   const [persons, setPersons] = useState ([ ]) 
   const [filter, setFilter] = useState ({sort:'', query:''})
//    const [modalPersonCard, setModalPersonCard] = useState(false)
   const [totalPages, setTotalPages] = useState(0)
   const [limitPersons, setLimitPersons] = useState(5)
   const [pagePersons, setPagePersons] = useState(1)
   const sortedAndSearchedPersons = usePersons(persons, filter.sort, filter.query)
   const [modalOpenPerson, setModalOpenPerson] = useState(false)

   const [fetchPersons, personsLoading, personError] = 
        useFetching(async(limitPersons, pagePersons) => {
        const response = await PersonService.getAll(limitPersons, pagePersons);
        setPersons(response.data)
        const totalCount = (response.headers['x-total-count'])
        setTotalPages(getCountPages(totalCount, limitPersons))
   })

   useEffect(() => {
       fetchPersons(limitPersons, pagePersons)
   }, [])

    useEffect(() => {
           fetchPersons(limitPersons, pagePersons)
       }, [pagePersons,limitPersons])
    
    const changePage = (pagePersons) => {
        setPagePersons(pagePersons)
        fetchPersons(limitPersons, pagePersons)
    }

    const removePerson = (person) => {
        setPersons(persons.filter(p => p.id !== person.id))  
    }

    const openPerson = () => {
        setModalOpenPerson(false)
    } 
    const noUpdate = (e) => {
        e.preventDefault();
    }

    return(
    <div>
        <MainBarSides>GET RESULT</MainBarSides>

        <form className={classes.pp__person}>
            
            <h2 className={classes.pp__titles}>Request Names:</h2>

        {/* NEED ToDo тут нужно селектить по компании+вакансии */}
            <div className={classes.pp__top_buttons}>
                <SelectCurOffer
                value={limitPersons}
                onChange={value => setLimitPersons(value)}
                defaultValue = "select"
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 20, name: '20'},
                    {value: -1, name: 'all'},
                ]}/>
            </div>

            {/* NEED ToDo при нажатии выдает инф о компании и вакансии - 
        уже готовый есть код, нужно перетянуть(см. кнопка Open в Vacancy List)  + те фильтры, которые были установленны*/}
            <ButtonLookInfo onClick={noUpdate}>
                Look Info about Request
            </ButtonLookInfo>
            
            {/* NEED ToDo после нажатия загружается табличка по реквесту */}
            <ButtonLookResult onClick={noUpdate}>
                Look result
            </ButtonLookResult>
            
            {/* может убрать? или сделать бесконечную ленту? и + накидать в нижний 
        бар больше фильтров*/}
            <div className={classes.pp__paggination}>
                <OffersPagination 
                    totalPages={totalPages}
                    pageOffers={pagePersons} 
                    changePage={changePage}
                />
            </div>

            <div className={classes.pp__horiz}/>

        </form >
           
        {/* шапка таблицы ? может, отдельным компонентом сделать*/}
        <form className={classes.pp__form_title_table}>

            <hr className={classes.pp__table_hr1}/>
            <hr className={classes.pp__table_hr2}/>
            <hr className={classes.pp__table_v1}/>
            <hr className={classes.pp__table_v2}/>
            <hr className={classes.pp__table_v3}/>
            <hr className={classes.pp__table_v4}/>
            <hr className={classes.pp__table_v5}/>
            <hr className={classes.pp__table_v6}/>
            <hr className={classes.pp__table_v7}/>
            <hr className={classes.pp__table_v8}/>

            <div className={classes.pp__col1}>Number</div>
            <div className={classes.pp__col2}>Link to Candidate Card *full information</div>
            <div className={classes.pp__col3_1}>Work experience</div>
            <div className={classes.pp__col3_2}>years</div>
            <div className={classes.pp__col4_1}>Companies</div>
            <div className={classes.pp__col4_2}>name</div>
            <div className={classes.pp__col5_1}>Current position</div>
            <div className={classes.pp__col5_2}>name</div>
            <div className={classes.pp__col6_1}>Languages</div>
            <div className={classes.pp__col6_2}>language - level</div>
            <div className={classes.pp__col7_1}>Link to site</div>
            <div className={classes.pp__col7_2}>type site - link</div>
            <div className={classes.pp__col8_1}>Educations</div>
            <div className={classes.pp__col8_2}>establishments</div>
            <div className={classes.pp__col9}>Status candidate</div>

        </form>


        <div className={classes.pp__form_table}>
            {/* ЭТО ПОСТРАНИЧНЫЙ ВЫВОД persons */}
        {personError &&
            <h2>SOMETHING WENT WRONG {personError}</h2>}
        {personsLoading
        ?<div style={{display:'flex', justifyContent: 'center', marginTop: 50}}>
            <LoaderOfferList/>
        </div>
        :
        <PersonList 
            remove={removePerson} 
            open={openPerson}
            persons={sortedAndSearchedPersons} 
            visible={modalOpenPerson} 
            setVisible={setModalOpenPerson}
            />
        }
         
        </div>

        <div className={classes.pp__bottom_bar}>
            <BottomBar/>
        </div>
        
    </div>
    );
}
export default PersonsPage;

 