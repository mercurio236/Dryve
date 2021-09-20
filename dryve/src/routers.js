import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Contato from './Pages/Contatos';

export default function Router(){
    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/contato"  component={Contato}/>
        </Switch>
    )
}