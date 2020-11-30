import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import ListConference from '../Components/ListConference';
import Spearkers from '../Components/Speakers';
import Footer from '../Components/UI/Footer';
import Header from '../Components/UI/Header';

const AppRouter = () => {
    return (
        <>
            <Header titulo="Conf-Tech"/>
            <Router>
                <Switch>
                    <Route exact path ="/" component={ListConference}></Route>
                    <Route exact path="/:speaker" component={Spearkers}></Route>
                </Switch>
            </Router>
            <Footer/>
        </>
    );
}
 
export default AppRouter;