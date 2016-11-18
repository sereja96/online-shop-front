import React from 'react';
import ReactDOM from 'react-dom';
import { login } from '../actions/UserActions';

class LoginView extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            login: '',
            password: ''
        };
    }

    handleLoginChange (e) {
        this.setState({login: e.target.value});
    }

    handlePasswordChange (e) {
        this.setState({password: e.target.value});
    }

    login (e) {
        e.preventDefault();

        this.loginData = {
            login: this.state.login,
            password: this.state.password
        };

        login(this.loginData, this.state.redirectTo);
    }

    render () {
        return (
            <div className='col-xs-12 col-md-6 col-md-offset-3'>
                <h3>Log in to view protected content!</h3>
                <p>Hint: hello@test.com / test</p>
                <form name="loginFrom">
                    <input type="text"
                           name="login"
                           onChange={this.handleLoginChange.bind(this)}
                           placeholder="login:" />
                    <input type="password"
                           name="password"
                           onChange={this.handlePasswordChange.bind(this)}
                           placeholder="password: "/>
                    <button onClick={this.login.bind(this)} type="submit">sign in</button>
                </form>
            </div>
        );
    }
}

export default LoginView;

