import { getData, postData } from './RequestAction';
import { ORDERS_ERROR,
    ORDERS_REQUEST,
    ORDERS_SUCCESS,
    ORDER_CONFIRM_ERROR,
    ORDER_CONFIRM_REQUEST,
    ORDER_CONFIRM_SUCCESS } from '../constants/OrderConstants';

export function getOrders () {
    const request = getData('/orders', true);

    return {
        type: ORDERS_REQUEST,
        payload: request
    }
}

export function getOrdersSuccess (response) {
    return {
        type: ORDERS_SUCCESS,
        payload: response.payload
    }
}

export function getOrdersError (response) {
    return {
        type: ORDERS_ERROR,
        payload: response.payload
    }
}


export function confirmOrder (data) {
    const request = postData('/order', true, data);

    return {
        type: ORDER_CONFIRM_REQUEST,
        payload: request
    }
}

export function confirmOrderSuccess (response) {
    return {
        type: ORDER_CONFIRM_SUCCESS,
        payload: response.payload
    }
}

export function confirmOrderError (response) {
    return {
        type: ORDER_CONFIRM_ERROR,
        payload: response.payload
    }
}