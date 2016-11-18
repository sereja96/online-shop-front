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
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.log(error);
    });
};

export function getData (url, isAuthRequired, data) {
    return getDataFromRequest(url, 'GET', isAuthRequired, data).then(function (response) {
        return response;
    });
}

export function postData (url, isAuthRequired, data) {
    return getDataFromRequest(url, 'POST', isAuthRequired, data).then(function (response) {
        return response;
    });
}

export function deleteData (url, isAuthRequired, data) {
    return getDataFromRequest(url, 'DELETE', isAuthRequired, data).then(function (response) {
        return response;
    });
}

export function putData (url, isAuthRequired, data) {
    return getDataFromRequest(url, 'PUT', isAuthRequired, data).then(function (response) {
        return response;
    });
}

export function patchData (url, isAuthRequired, data) {
    return getDataFromRequest(url, 'PATCH', isAuthRequired, data).then(function (response) {
        return response;
    });
}

export function isSuccess (response) {
    if (typeof response != 'undefined'
        && response
        && response.status == REQUEST_SUCCESS) {
        return true;
    }

    return false;
}
