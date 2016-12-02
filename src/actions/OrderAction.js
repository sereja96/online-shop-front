import { getData } from './RequestAction';
import { ORDERS_ERROR, ORDERS_REQUEST, ORDERS_SUCCESS } from '../constants/OrderConstants';

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
