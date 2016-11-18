import React from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import ProtectedView from '../views/ProtectedView';
import NotFoundView from '../views/NotFoundView';
import { requireAuth, requireNonAuth } from '../components/AuthenticatedComponent';

class Root extends React.Component {

    render () {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={HomeView}/>
                    <Route path="login"
                           onEnter={requireNonAuth}
                           component={LoginView} />
                    <Route path="protected"
                           component={ProtectedView}
                           onEnter={requireAuth} />

                    <Route path="*" component={NotFoundView} />
                </Route>
            </Router>
        );
    }
}

export default Root;
