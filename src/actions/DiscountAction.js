import { getData } from './RequestAction';
import { CHECK_DISCOUNT_ERROR, CHECK_DISCOUNT_REQUEST, CHECK_DISCOUNT_SUCCESS } from '../constants/DiscountConstants';

export function checkDiscount (code) {
    const request = getData(['/discount', code].join('/'), true);

    return {
        type: CHECK_DISCOUNT_REQUEST,
        payload: request
    }
}

export function checkDiscountSuccess (response) {
    console.log(response);
    return {
        type: CHECK_DISCOUNT_SUCCESS,
        payload: response.payload
    }
}

export function checkDiscountError (response) {
    console.log(response);
    return {
        type: CHECK_DISCOUNT_ERROR,
        payload: response.payload
    }
}
