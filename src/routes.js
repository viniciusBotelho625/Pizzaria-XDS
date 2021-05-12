import React from 'react';
import {  BrowserRouter, Route, Switch} from 'react-router-dom';

import List from './pages/list';
import Logon from './pages/login';
import Detail from './pages/detail';
import Success from './pages/success';
import NotFound from './pages/notFound';
import ProtectedRoutes from './pages/ProtectedRoutes';
import { AuthProvider} from './context/AuthContext';


const Routes = () => (
    <AuthProvider>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon}/>
            <ProtectedRoutes path="/list" component={List}></ProtectedRoutes>
            <ProtectedRoutes path="/detail" component={Detail}></ProtectedRoutes>
            <ProtectedRoutes path="/success" component={Success}></ProtectedRoutes>
            <ProtectedRoutes path="*" component={NotFound}></ProtectedRoutes>
        </Switch>
    </BrowserRouter>
    </AuthProvider>
);


export default Routes;