import React from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import './Main.css';
import Scoreboard from '../Scoreboard/Scoreboard';
import Authorization from '../Authorization/Authorization';
import Game from '../Game/Game';
import Rules from '../Rules/Rules';

function Main() {
    return (
        <div className="Main">
            <Switch>
                <Route path="/authorization" component={Authorization}/>
                <Route path="/game" component={Game}/>
                <Route path="/scoreboard" component={Scoreboard}/>
                <Route path="/rules" component={Rules}/>
                <Redirect from="/" to="/authorization"/>
            </Switch>
        </div>
    );
}

export default withRouter(Main);
