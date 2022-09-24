import React, { useMemo } from 'react';

export const useSortedOffers = (offers, sort) => {
    
    const sortedOffers = useMemo(() => {
        if(sort) {
            return [...offers].sort((a, b) => a[sort].localeCompare (b[sort]))
        }
        return offers;
    }, [sort, offers])

    return sortedOffers;
};


export const useOffers = (offers, sort, query) => {
    const sortedOffers = useSortedOffers(offers, sort);

    const sortedAndSearchedOffers = useMemo (() => {
        return sortedOffers.filter(offer => 
            // offer.company.toLowerCase().includes(query.toLowerCase())
            offer.title.toLowerCase().includes(query.toLowerCase())
        )
    }, [query, sortedOffers])

    return sortedAndSearchedOffers;
}