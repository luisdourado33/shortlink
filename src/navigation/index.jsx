import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

/**
 * Pages
 */
import Main from '../pages/Main';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Main />
                </Route>
            </Switch>
        </Router>
    );
}