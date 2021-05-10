import React from 'react';
import {  BrowserRouter, Route } from 'react-router-dom';

import List from './pages/list';
import Logon from './pages/login';
import Detail from './pages/detail';
import Success from './pages/success';

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Logon}/>
            <Route path="/list" component={List}/>
            <Route path="/detail" component={Detail}/>
            <Route path="/success" component={Success}/>
        </BrowserRouter>
    );
}

export default Routes;