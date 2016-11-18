import { postData, isSuccess } from '../actions/RequestAction';


export function isAuth () {
    var token = localStorage.getItem('token');
    var currentUser = localStorage.getItem('currentUser');

    return !!token && !!currentUser;
}

export function requireAuth (nextState, replace) {
    if (!isAuth()) {
        replace({ pathname: '/login' });
    }
}

export function requireNonAuth (nextState, replace) {
    if (isAuth()) {
        replace({ pathname: '/' });
    }
}
