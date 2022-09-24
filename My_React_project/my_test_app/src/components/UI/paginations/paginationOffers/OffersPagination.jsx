import React from "react";
import { getCountPages, getPagesArray } from '../../../utils/utilOffers/CountPages';
import classes from './OffersPagination.module.css';

const OffersPagination = ({totalPages, pageOffers,changePage}) => {
   
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className={classes.page__wrapper}>
            {pagesArray.map(p => 
                <span 
                onClick={() => changePage(p)}
                key={p} 
                className={pageOffers === p
                    ? classes.page__current
                    : classes.page}>
                      {p}
                </span>
            // тут нужно сделать стили ButtonNumberPage(for offers) 
        )}
        </div>

    );
};
export default OffersPagination;