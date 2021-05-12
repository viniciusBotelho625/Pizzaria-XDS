import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router';
import AuthContext from '../context/AuthContext';

const ProtectedRoutes = ({children, path, component}) => {

    const {authToken} = useContext(AuthContext)

    if(!authToken) return <Redirect to="/" />
    
    return (
        <Route path={path}>
            {children}
        </Route>
    )
}

export default ProtectedRoutes;