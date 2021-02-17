import history from './history';
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from './components/Home';
import Rocket from './components/Rocket';
import Launch from './components/Launch';


export default class Routes extends Component {
    render (){
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Rocket" component={Rocket} />
                    <Route path="/Launch"  component={Launch} />
                </Switch>
            </Router>
        )
    }
}