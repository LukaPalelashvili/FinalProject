import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import CartContextProvider from "./Context/CartContext";
import './index.css';
import App from './App';

ReactDOM.render(
    <CartContextProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </CartContextProvider>,
    document.getElementById('root')
);
