import { getData, postData, deleteData, patchData } from './RequestAction';
import { ADD_BASKET_ERROR,
    ADD_BASKET_REQUEST,
    ADD_BASKET_SUCCESS,
    BASKET_ERROR,
    BASKET_REQUEST,
    BASKET_SUCCESS,
    CHANGE_BASKET_ERROR,
    CHANGE_BASKET_REQUEST,
    CHANGE_BASKET_SUCCESS,
    REMOVE_BASKET_ERROR,
    REMOVE_BASKET_REQUEST } from '../constants/BasketConstants';


export function getBasket () {
    const request = getData('/basket', true);

    return {
        type: BASKET_REQUEST,
        payload: request
    }
}

export function getBasketSuccess (response) {
    return {
        type: BASKET_SUCCESS,
        payload: response.payload
    }
}

export function getBasketError (response) {
    return {
        type: BASKET_ERROR,
        payload: response.payload
    }
}


export function addProduct (id, count) {
    const request = postData(['/basket', id, count].join('/'), true);

    return {
        type: ADD_BASKET_REQUEST,
        payload: request
    }
}

export function addProductSuccess (response) {
    return {
        type: ADD_BASKET_SUCCESS,
        payload: response.payload
    }
}

export function addProductError (response) {
    return {
        type: ADD_BASKET_ERROR,
        payload: response.payload
    }
}


export function removeProduct (id) {
    const request = deleteData(['/basket', id].join('/'), true);

    return {
        type: REMOVE_BASKET_REQUEST,
        payload: request
    }
}

export function removeProductError (response) {
    return {
        type: REMOVE_BASKET_ERROR,
        payload: response.payload
    }
}


export function updateCount (id, count) {
    const request = patchData(['/basket', id, count].join('/'), true);

    return {
        type: CHANGE_BASKET_REQUEST,
        payload: request
    }
}

export function updateCountError (response) {
    return {
        type: CHANGE_BASKET_ERROR,
        payload: response.payload
    }
}
