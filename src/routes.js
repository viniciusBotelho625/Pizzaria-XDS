import React from 'react';
import {  BrowserRouter, Route, Switch} from 'react-router-dom';

import List from './pages/list';
import Logon from './pages/login';
import Detail from './pages/detail';
import Success from './pages/success';
import NotFound from './pages/notFound';
// import ProtectedRoutes from './pages/ProtectedRoutes';
// import { AuthProvider} from './context/AuthContext';


const Routes = () => (
    // <AuthProvider>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon}/>
            <Route path="/list" component={List}/>
            <Route path="/detail" component={Detail}/>
            <Route path="/success" component={Success}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </BrowserRouter>
    // {/* </AuthProvider> */}
);


export default Routes;