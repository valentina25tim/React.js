import React, { useState } from "react"

export const useFetching = (callback) => {
    const [offerLoading, setOfferLoading] = useState(false)
    const [error, setError] = useState('')

    const fething = async(...args) => {
        try {
            setOfferLoading(true)
            await callback(...args)
        }
        catch (e) {
            setError(e.message)
        }
        finally {
            setOfferLoading(false)
        }
    }
    return [fething, offerLoading, error]
}