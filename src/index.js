import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Routes from './Router/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import './styles/style.scss'
const store = configureStore()

const jsx = (
    <Provider store={store}>
        <Routes />
    </Provider>
);

ReactDOM.render( jsx , document.getElementById('root'));
reportWebVitals();
