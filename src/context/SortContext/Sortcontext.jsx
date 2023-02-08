import { createContext, useContext, useReducer } from "react";
import { SortreducerFunc ,sortInitalstate } from "../../reducer/Index";

const Sortcontext = createContext()

const SortProvider = ({children}) => {
    
    const [state , dispatchSort] = useReducer(SortreducerFunc , sortInitalstate)
     return <Sortcontext.Provider
     value={{state , dispatchSort}}
    >{children}</Sortcontext.Provider>
}

const useSort = () => useContext(Sortcontext)

export {SortProvider , useSort}