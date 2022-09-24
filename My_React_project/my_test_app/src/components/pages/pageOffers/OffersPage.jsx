import React, { useState, useMemo, useEffect, useReducer, useRef } from 'react';
import OfferList from '../../UI/items/offersList/OfferList';
import AddVacancyForm from '../../UI/items/offersList/AddVacancyForm';
import LoaderOfferList from '../../UI/loaders/loaderOffersList/LoaderOfferList';
import ModalAddOffer from '../../UI/modals/modalAddOffer/ModalAddOffer';
import OffersPagination from '../../UI/paginations/paginationOffers/OffersPagination';
import OffersFilter from '../../filters/offersFilter/OffersFilter';
import { useOffers } from '../../../hook/hookOffers/UseOffers';
import OfferService from '../../../API/services/OfferService';
import { useFetching } from '../../../hook/hookOffers/UseFetching';
import { getCountPages, getPagesArray } from '../../utils/utilOffers/CountPages';
import SelectOffers from '../../UI/select/selectOffers/SelectOffers';
import MainBarSides from '../setsBarSide/MainBarSides';
import ButtonAddVacancy from '../../UI/buttons/buttonAddVacancy/ButtonAddVacancy';
import classes from './OffersBar.module.css';


const OffersPage = () => {
    
   const [offers, setOffers] = useState ([ ]) 
   const [filter, setFilter] = useState ({sort:'', query:''})
   const [modalAddOffer, setModalAddOffer] = useState(false) 
   const [totalPages, setTotalPages] = useState(0)
   const [limitOffers, setLimitOffers] = useState(10)
   const [pageOffers, setPageOffers] = useState(1)
   const sortedAndSearchedOffers = useOffers(offers, filter.sort, filter.query)
   
   const [fetchOffers, offersLoading, offerError] = 
        useFetching(async(limitOffers, pageOffers) => {
        const response = await OfferService.getAll(limitOffers, pageOffers);
        setOffers(response.data)
        const totalCount = (response.headers['x-total-count'])
        setTotalPages(getCountPages(totalCount, limitOffers))
   })

//ЭТО ДЛЯ ПОСТРАНИЧНОГО ВЫВОДА ОФФЕРОв
   useEffect(() => {
       fetchOffers(limitOffers, pageOffers)
   }, [])

    useEffect(() => {
           fetchOffers(limitOffers, pageOffers)
       }, [pageOffers,limitOffers])
    
    const createOffer = (newOffer) => {
        setOffers([...offers, newOffer])
        setModalAddOffer(false)
    }

    const changePage = (pageOffers) => {
        setPageOffers(pageOffers)
        fetchOffers(limitOffers, pageOffers)
    }

    const removeOffer = (offer) => {
        setOffers(offers.filter(p => p.id !== offer.id))
    }

    return(
    <div>
        <MainBarSides>VACANCY LIST</MainBarSides>

       <div className={classes.ob__offer}>

            <ButtonAddVacancy
                style={{marginTop: 5}}
                onClick={() => setModalAddOffer(true)}>
                    Add vacancy
            </ButtonAddVacancy>

            <ModalAddOffer
                visible={modalAddOffer} 
                setVisible={setModalAddOffer}
            >
                <AddVacancyForm create = {createOffer}/>
            </ModalAddOffer>  

            <OffersFilter
                filter={filter}
                setFilter={setFilter}
            />

            <SelectOffers
                value={limitOffers}
                onChange={value => setLimitOffers(value)}
                defaultValue = "Count offers"
                options={[
                    {value: 10, name: '10'},
                    {value: 20, name: '20'},
                    {value: 30, name: '30'},
                    {value: -1, name: 'all'},
                ]}/>

            <div className={classes.ob__paggination}>
                <OffersPagination 
                    totalPages={totalPages}
                    pageOffers={pageOffers} 
                    changePage={changePage}
                />
            </div>

        </div>
        
    <div>
            {/* ЭТО ПОСТРАНИЧНЫЙ ВЫВОД ОФФЕРОВ */}
        {offerError &&
            <h2>SOMETHING WENT WRONG {offerError}</h2>}
        {offersLoading
        ?<div  style={{display:'flex', justifyContent: 'center', marginTop: 50}}>
            <LoaderOfferList/>
        </div>
        :<OfferList remove={removeOffer} offers={sortedAndSearchedOffers}/>
        }
       
        
        {/* Это бесконеч лента с офферами */}
    {/* {offerError &&
            <h2>SOMETHING WENT WRONG {offerError}</h2>
    }

        <OfferList remove={removeOffer} offers={sortedAndSearchedOffers}
        />
        
        
        {offersLoading &&
        <div style={{display:'flex', justifyContent: 'center', marginTop: 50}}>
            <LoaderOfferList/>
        </div>
        }
        <div ref={lastElement} style={{height: 20, background: "red" }}/> */}
        </div>
    </div>
    );
}
export default OffersPage;

 