import { createContext, useContext, useState } from "react";


const Authcontext = createContext({ isLoggedIn: false })

const AuthProvider = ({ children }) => {
   
    const [auth, setAuth] = useState({
        token: "",
        isAuth: false,
        userName: "Guest"
    } )

    return <Authcontext.Provider value={{auth , setAuth}}
    >{children}</Authcontext.Provider>
}

const useAuth = () => useContext(Authcontext)

export {AuthProvider , useAuth}    