import React, { Children, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={{authToken: null}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;


