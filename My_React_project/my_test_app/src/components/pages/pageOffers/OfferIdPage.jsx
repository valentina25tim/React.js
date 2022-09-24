import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OfferService from "../../../API/services/OfferService";
import { useFetching } from "../../../hook/hookOffers/UseFetching";
import LoaderOfferList from "../../UI/loaders/loaderOffersList/LoaderOfferList";
import MainBarSides from "../setsBarSide/MainBarSides";

const OfferIdPage = () => {

    const params = useParams()
    const [offer, setOffer] = useState({})
    const [commentsToOffer, setCommentsToOffer] = useState([])

    const [fetchOfferById, offersLoading, offerError] = 
    useFetching(async(id) => {
            const response = await OfferService.getOfferById(id)
            setOffer(response.data)
            console.log(response.data)
        }
    )
    const [fetchCommentsToOffer, commentsLoading, commentsError] = 
    useFetching(async(id) => {
            const response = await OfferService.getCommentsToOffer(id)
            setCommentsToOffer(response.data)
            console.log(response.data)
            }
    )

    useEffect(() => {
        fetchOfferById(params.id)
        fetchCommentsToOffer(params.id)
    }, [])

    return (
        <div>
            <MainBarSides>VACANCY ITEM</MainBarSides>
            
            {offersLoading
                ? <LoaderOfferList/>
                : 
                <div>
                    {offer.id} - 
                    {offer.title} - 
                    {offer.body}
                </div>
            }

            <h3>Comments</h3>
            {commentsLoading
                ?<LoaderOfferList/>
                :<div>
                    {commentsToOffer.map (com =>
                        <div key = {com.id}>
                            <h6>{com.id}</h6>
                            <h6>{com.email}</h6>
                            <h6>{com.body}</h6>
                        </div>
                    )}
                </div>
            }

        </div>
    )
}
export default OfferIdPage