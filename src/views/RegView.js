import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Panel, Col, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

class RegView extends React.Component {

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


    render () {
        return (
            <Col md={4} mdOffset={4}
                 sm={6} smOffset={3}
                 xs={10} xsOffset={1} >

                <Panel>
                    <h3>Создание новой учетной записи</h3>

                    <form name="regForm">
                        <FormGroup validationState={this.state.loginStatus}>
                            <ControlLabel>Введите Логин: </ControlLabel>
                            <FormControl type="text"
                                         name="login"
                                         onChange={this.handleLoginChange.bind(this)}
                                         placeholder="Логин:" />
                            <HelpBlock>{ this.state.errorLogin }</HelpBlock>
                        </FormGroup>

                        <FormGroup >
                            <ControlLabel>Введите имя: </ControlLabel>
                            <FormControl type="text"
                                         placeholder="Имя:" />
                            <HelpBlock>{ this.state.errorLogin }</HelpBlock>
                        </FormGroup>

                        <FormGroup >
                            <ControlLabel>Введите фамилию: </ControlLabel>
                            <FormControl type="text"
                                         placeholder="Фамилия:" />
                            <HelpBlock>{ this.state.errorLogin }</HelpBlock>
                        </FormGroup>

                        <FormGroup >
                            <ControlLabel>Введите электронную почту: </ControlLabel>
                            <FormControl type="text"
                                         placeholder="Электронная почта:" />
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

                        <FormGroup >
                            <ControlLabel>Введите подтверждение пароля: </ControlLabel>
                            <FormControl type="password"
                                         name="password"
                                         onChange={this.handlePasswordChange.bind(this)}
                                         placeholder="Подтверждение: "/>
                            <HelpBlock>{ this.state.errorPassword }</HelpBlock>
                        </FormGroup>

                        <FormGroup>
                            <Button type="submit"
                                    bsSize="lg"
                                    bsStyle="success" >Регистрация</Button>
                        </FormGroup>

                    </form>
                </Panel>
            </Col>
        );
    }
}

export default RegView;

