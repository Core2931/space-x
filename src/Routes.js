import history from './history';
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from './components/Home';
import Rocket from './components/Rocket';
import Launch from './components/Launch';
import Rocketdetail from './components/Rocketdetail';
import Launchdetail from './components/Launchdetail';


export default class Routes extends Component {
    render (){
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/space-x/Home" component={Home} />
                    <Route path="/space-x/Rocket"  component={Rocket} />
                    <Route path="/space-x/Launch" component={Launch} />
                    <Route path="/space-x/Rocketdetail/:rocket_id" component={Rocketdetail} />
                    <Route path="/space-x/Launchdetail/:flight_number" component={Launchdetail} />
                </Switch>
            </Router>
        )
    }
}