import { getDataFromAction, getMessageFromAction } from '../actions/RequestAction';
import { ORDERS_ERROR, ORDERS_REQUEST, ORDERS_SUCCESS } from '../constants/OrderConstants';

const INITIAL_STATE = {
    orders: [],
    error : null,
    loading: true
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {

        case ORDERS_REQUEST:
            return {...state, orders: [], error : null, loading: true};
        case ORDERS_SUCCESS:
            return {...state, orders: getDataFromAction(action), error : null, loading: false};
        case ORDERS_ERROR:
            return {...state, orders: [], error : getMessageFromAction(action), loading: false};

        default:
            return state;
    }
}
