import { postData, isSuccess } from '../actions/RequestAction';


export function isAuth () {
    var token = localStorage.getItem('token');
    var currentUser = localStorage.getItem('currentUser');

    return !!token && !!currentUser;
}

export function isAdmin () {
    var currentUser = localStorage.getItem('currentUser');
    if (!!!currentUser) {
        return false;
    }
    var currentUserObj = JSON.parse(currentUser);

    console.log(currentUserObj);
    return currentUserObj.role.name  === 'admin';
}

export function requireAuth (nextState, replace) {
    if (!isAuth()) {
        replace({ pathname: '/login' });
    }
}

export function requireAdminAuth (nextState, replace) {
    requireAuth(nextState, replace);

    if (!isAdmin()) {
        replace({ pathname: '/forbidden' });
    }
}

export function requireNonAuth (nextState, replace) {
    if (isAuth()) {
        replace({ pathname: '/' });
    }
}
