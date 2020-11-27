import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import ProductList from '../Components/ProductList';
import SearchBar from '../Components/SearchBar';
import Header from '../Components/UI/Header';

const AppRouter = () => {
    return (
        <>
        <Header titulo='Mercado Libre'/>
        <Router>
            <Switch>
                <Route exact path='/' component={ProductList}></Route>
            </Switch>
        </Router>
        </>
    );
}
 
export default AppRouter;