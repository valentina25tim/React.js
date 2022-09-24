import React from "react";
import InputSearchOffers from "../../UI/inputs/inputSearchOffers/InputSearchOffers";
import SelectOffers from "../../UI/select/selectOffers/SelectOffers";


const OffersFilter = ({filter, setFilter}) => {
    return(
        <div>
            <InputSearchOffers
             value={filter.query}
             onChange={e => setFilter({...filter, query: e.target.value})}
             placeholder="Search ..."/>
             

            <SelectOffers
                value={filter.sort}
                onChange={selectedSort =>setFilter ({...filter, sort: selectedSort})}
                defaultValue="Sorted by..."
                options={[
                //   {value: 'company', name: 'Company'},
                //   {value: 'vacancy', name: 'Vacancy'}
                {value: 'title', name: 'Company'},
                {value: 'body', name: 'Vacancy'}
            ]}/>
        </div>

    );
};
export default OffersFilter;
