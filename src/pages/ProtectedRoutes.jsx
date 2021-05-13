import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router';
// import AuthContext from '../context/AuthContext';
// import Cookies from 'js-cookie';

// const ProtectedRoutes = ({children, path, component}) => {

//     const {authToken} = useContext(AuthContext)
//     const token = Cookies.get("token")
//     if(!authToken && !token ) return <Redirect to="/" />
    
//     return (
//         <Route path={path}>
//             {children}
//         </Route>
//     )
// }

// export default ProtectedRoutes;