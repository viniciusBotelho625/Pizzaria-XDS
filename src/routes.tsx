import React from 'react';
import {  BrowserRouter, Route } from 'react-router-dom';

import List from './pages/list';
import Logon from './pages/login';

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Logon}/>
            <Route path="/menu" exact component={List}/>
        </BrowserRouter>
    );
}

export default Routes;