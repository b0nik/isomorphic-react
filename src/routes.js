import React, {Component} from 'react';
import { IndexRoute, Route }  from 'react-router';
import App from './containers/App'
import Home from './containers/Home'
import Contact from './containers/Contact'
import textComp from './containers/textComp'


export default (
    <Route component={App} path='/'>
        <IndexRoute component={textComp}/>
        <Route component={Contact} path='contact'/>
        <Route component={Home} path='home'/>
    </Route>
)