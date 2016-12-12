import { push } from 'react-router-redux';
import { LOGIN_USER_SUCCESS, LOGIN_USER_REQUEST, LOGIN_USER_FAILURE, LOGOUT_USER } from '../constants/index';
import { postData, isSuccess } from './RequestAction';

export function login ({ login, password }) {
    var data = {
        login: login,
        password: password
    };

    loginUserRequest();
    postData('/login', false, data).then(function (response) {
        if (response.data.status == 'success') {
            loginUserSuccess(response.data.data);
            location.reload();
        } else {
            loginUserFailure();
        }
    }).catch(function (error) {
        loginUserFailure();
    });
}

export function loginUserRequest() {
    return {
        type: LOGIN_USER_REQUEST
    }
}

export function loginUserSuccess({ token, user }) {
    localStorage.setItem('token', token);
    localStorage.setItem('currentUser', JSON.stringify(user));

    return {
        type: LOGIN_USER_SUCCESS
    }
}

export function loginUserFailure() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');

    return {
        type: LOGIN_USER_FAILURE
    }
}

export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');

    return {
        type: LOGOUT_USER
    }
}

export function logoutAndRedirect() {
    logout();
    location.reload();
}
