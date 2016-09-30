import reactDom from 'react-dom';
import React from 'react';
import { browserHistory, Router,Link } from 'react-router';
import routes from './routes';
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore';

const store = configureStore();

reactDom.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('react-view')
);
