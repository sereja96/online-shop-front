import { getData } from './RequestAction';
import { PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_ERROR } from '../constants/ProductConstants';


export function fetchFullProduct (id) {
    const request = getData(['/product', id].join('/'), true);

    return {
        type: PRODUCT_REQUEST,
        payload: request
    }
}

export function fetchFullProductSuccess (response) {
    return {
        type: PRODUCT_SUCCESS,
        payload: response.payload
    }
}

export function fetchFullProductError (response) {
    return {
        type: PRODUCT_ERROR,
        payload: response.payload
    }
}
