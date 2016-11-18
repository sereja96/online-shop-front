import React from 'react';
import { Link } from 'react-router';
import { isAuth } from '../components/AuthenticatedComponent';
import { logoutAndRedirect } from '../actions/UserActions';

class Navigation extends React.Component {

    render () {
        return (
            <div className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Home</Link>
                    </div>
                    <div id="navbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/protected">Protected Content</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            {
                                isAuth()
                                    ? <li onClick={logoutAndRedirect}>Logout</li>
                                    : null
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation;
