import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory  } from 'react-router';
import routes from './routes';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

let store = configureStore();
let history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
