import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Panel, Col, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
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

        if (this.checkValidLogin()) {
            this.setState({loginStatus: ''});
            this.setState({errorLogin: ''});
        }
    }

    handlePasswordChange (e) {
        this.setState({password: e.target.value});

        if (this.checkValidPassword()) {
            this.setState({passwordStatus: ''});
            this.setState({errorPassword: ''});
        }
    }

    checkValidLogin () {
        if (this.state.login.length < 3) {
            this.setState({loginStatus: 'error'});
            this.setState({errorLogin: 'Логин не может быть короче 3 символов.'});
            return false;
        }

        return true;
    }

    checkValidPassword () {
        if (this.state.password.length < 3) {
            this.setState({passwordStatus: 'error'});
            this.setState({errorPassword: 'Пароль не может быть короче 3 символов.'});
            return false;
        }

        return true;
    }

    login (e) {
        e.preventDefault();

        var checkLogin = this.checkValidLogin();
        if (this.checkValidPassword() && checkLogin) {
            this.loginData = {
                login: this.state.login,
                password: this.state.password
            };

            login(this.loginData);
        }
    }

    render () {
        return (
            <Col md={4} mdOffset={4}
                 sm={6} smOffset={3}
                 xs={10} xsOffset={1} >

                <Panel>
                    <h3>Авторизуйтесь для полноценного использования ресурсов сайта</h3>

                    <form name="loginFrom">
                        <FormGroup validationState={this.state.loginStatus}>
                            <ControlLabel>Введите Логин: </ControlLabel>
                            <FormControl type="text"
                                         name="login"
                                         onChange={this.handleLoginChange.bind(this)}
                                         placeholder="Логин:" />
                            <HelpBlock>{ this.state.errorLogin }</HelpBlock>
                        </FormGroup>

                        <FormGroup validationState={this.state.passwordStatus}>
                            <ControlLabel>Введите Пароль: </ControlLabel>
                            <FormControl type="password"
                                         name="password"
                                         onChange={this.handlePasswordChange.bind(this)}
                                         placeholder="Пароль: "/>
                            <HelpBlock>{ this.state.errorPassword }</HelpBlock>
                        </FormGroup>

                        <FormGroup>
                            <Button onClick={this.login.bind(this)}
                                    type="submit"
                                    bsSize="lg"
                                    bsStyle="success" >Войти</Button>
                        </FormGroup>

                    </form>
                </Panel>
            </Col>
        );
    }
}

export default LoginView;

