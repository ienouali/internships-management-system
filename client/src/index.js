import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './i18n';

const store = configureStore();
ReactDOM.render(<Provider store={store}><App /></Provider>,
    document.getElementById('root'));
serviceWorker.unregister();
