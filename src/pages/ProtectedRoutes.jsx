import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router';
import AuthContext from '../context/AuthContext';

const ProtectedRoutes = ({children, path, component, authToken}) => {

    const {authToken} = useContext()

    if(!authToken) return <Redirect to="/" />
    
    return (
        <Route path={path} component>
            {children}
        </Route>
    )
}

export default ProtectedRoutes;