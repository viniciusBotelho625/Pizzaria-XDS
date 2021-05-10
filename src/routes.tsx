import React from 'react';
import {  BrowserRouter, Route } from 'react-router-dom';

import List from './pages/list';
import Logon from './pages/login';
import Detail from './pages/detail';

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/sdhb" component={Logon}/>
            <Route path="/as" component={List}/>
            <Route path="/" exact component={Detail}/>
        </BrowserRouter>
    );
}

export default Routes;