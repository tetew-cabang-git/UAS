import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './Home'
import Global from './Global'
import Indonesia from './Indonesia'

export default class App extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path='/Global'>
                    <Global/>
                </Route>
                <Route exact path='/Indonesia'>
                    <Indonesia/>
                </Route>
            </Switch>
        )
    }
}