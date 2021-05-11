import React from 'react';
import {  BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import { isAuthenticated } from "./services/authentication";

import List from './pages/list';
import Logon from './pages/login';
import Detail from './pages/detail';
import Success from './pages/success';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon}/>
            <Route path="/list" component={List}/>
            <Route path="/detail" component={Detail}/>
            <Route path="/success" component={Success}/>
            <Route path="*" component={() => <h1>Página não encontrada</h1>}/>
        </Switch>
    </BrowserRouter>
);


export default Routes;