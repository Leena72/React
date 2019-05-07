import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './components/reducer';
import * as serviceWorker from './serviceWorker';

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
window.store = store;
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
     document.getElementById('root'));

serviceWorker.unregister();
