import { API_ULR, allowMethods } from './Config';
import { REQUEST_SUCCESS } from '../constants';
import axios from 'axios';

var createUrl = function (url, isAuthRequired) {
    var fullUrl = API_ULR + url;

    if (isAuthRequired) {
        var token = localStorage.getItem('token');
        fullUrl += '?token=' + token;
    }

    return fullUrl;
};

var getDataFromRequest = function (url, method, isAuthRequired, data) {

    if (allowMethods.indexOf(method) == -1) {
        console.log('Method ' + method + ' not allowed!');
        return false;
    }

    url = createUrl(url, isAuthRequired);

    return axios({
        method: method,
        url: url,
        data: data
    });
};

export function getData (url, isAuthRequired, data) {
    return getDataFromRequest(url, 'GET', isAuthRequired, data);
}

export function postData (url, isAuthRequired, data) {
    return getDataFromRequest(url, 'POST', isAuthRequired, data);
}

export function deleteData (url, isAuthRequired, data) {
    return getDataFromRequest(url, 'DELETE', isAuthRequired, data);
}

export function putData (url, isAuthRequired, data) {
    return getDataFromRequest(url, 'PUT', isAuthRequired, data);
}

export function patchData (url, isAuthRequired, data) {
    return getDataFromRequest(url, 'PATCH', isAuthRequired, data);
}

export function isSuccess (response) {
    response = response.payload.data;

    if (typeof response != 'undefined'
        && response
        && response.status == REQUEST_SUCCESS) {
        return true;
    }

    return false;
}

export function getDataFromAction (action) {
    return action
        && action.payload
        && action.payload.data
        && action.payload.data.data
        || {};
}

export function getMessageFromAction (action) {
    return action
        && action.payload
        && action.payload.data
        && action.payload.data.message
        || true;
}
