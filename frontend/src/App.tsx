import React from 'react';
import {SignIn} from "./Pages/SignIn";
import './App.scss'
import {Route, Switch } from 'react-router-dom';
import { Home } from './Pages/Home';


function App() {
    return (
        <div className='App'>
            <Switch>
                <Route path="/signin" component={SignIn}/>
                <Route path="/" component={Home}/>
            </Switch>
        </div>
    )
}

export default App
