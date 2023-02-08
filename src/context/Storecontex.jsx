import React, { useContext, useEffect } from 'react';
import { createContext, useReducer } from "react";
import { storeReducer } from '../reducer/storeReducer';
import axios from "axios"



const Storecontext = createContext()

const StoreProvider = ({ children }) => {
    
    const [storeState, storeDispatch] = useReducer(storeReducer, {
        storeItem : []
    })
    useEffect (() => {
        const fetchData = async () => {
            try {
                const proData = await axios.get("/api/products")
                storeDispatch({
                    type: "Fetch-products",
                    payload : proData.data.products
                    
                })
            } catch (error) {
                console.log("error")
            }
        }
        fetchData()
        } , [])
    return <Storecontext.Provider
    value={{storeState , storeDispatch}}
    >{children}</Storecontext.Provider>

    
    
}
const useStore = () => useContext(Storecontext)

export {useStore , StoreProvider}