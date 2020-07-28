import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import CheckInPage from './pages/CheckInPage';
import SuccessPage from './pages/SuccessPage';
import { GlobalStyle } from './components/styles';

const App = () => {
    return (
        
        <BrowserRouter>
            <GlobalStyle />
            <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="/checkin" component={CheckInPage} />
                <Route path="/success" component={SuccessPage} />
            </Switch>
        </BrowserRouter>   
    )
}

export default App;