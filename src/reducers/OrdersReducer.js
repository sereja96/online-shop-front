import { getDataFromAction, getMessageFromAction } from '../actions/RequestAction';
import { ORDERS_ERROR,
    ORDERS_REQUEST,
    ORDERS_SUCCESS,
    ORDER_CONFIRM_ERROR,
    ORDER_CONFIRM_REQUEST,
    ORDER_CONFIRM_SUCCESS } from '../constants/OrderConstants';

const INITIAL_STATE = {
    orders: [],
    error : null,
    loading: true,
    success: false
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {

        case ORDERS_REQUEST:
            return {...state, orders: [], error : null, loading: true};
        case ORDERS_SUCCESS:
            return {...state, orders: getDataFromAction(action), error : null, loading: false};
        case ORDERS_ERROR:
            return {...state, orders: [], error : getMessageFromAction(action), loading: false};

        case ORDER_CONFIRM_REQUEST:
            return {...state, error: null, success: false, loading: true};
        case ORDER_CONFIRM_SUCCESS:
            return {...state, error: null, success: true, loading: false};
        case ORDER_CONFIRM_ERROR:
            return {...state, error: getMessageFromAction(action), success: false, loading: false};

        default:
            return state;
    }
}
