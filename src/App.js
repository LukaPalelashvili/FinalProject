import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import MainPage from './Pages/MainPage/MainPage';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import { Contact } from './Pages/Contact/Contact';
import { About } from './Pages/About/About';
import { Cart } from './Pages/Cart/Cart';
import Admin from './Pages/Admin/Admin';

const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Route exact path="/" component={MainPage} />
                <Route path="/products/:id" component={ProductDetail} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/cart" component={Cart} />
                <Route path="/admin" component={Admin} />
            </BrowserRouter>
        </React.Fragment>
    );
};

export default App;
