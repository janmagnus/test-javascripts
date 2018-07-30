import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Header from './components/header/Header'
import LinksPage from "./components/LinksPage";
import IFramePage from "./components/IFramePage";
import Footer from "./components/footer/Footer";

const App = () => (
    <div className="agate-l-two-columns">
        <Switch>
            <Route path='/i/:linkId' render={routeProps => <Header {...routeProps} withLogout={true}/>}/>
            <Route path='/' component={Header}/>
        </Switch>
        <Switch>
            <Route path='/i/:linkId' component={IFramePage}/>
            <Route path='/' component={LinksPage}/>
        </Switch>
        <Footer/>
    </div>
);

export default App;
