import { getDataFromAction, getMessageFromAction } from '../actions/RequestAction';
import { BASKET_ERROR, BASKET_REQUEST, BASKET_SUCCESS } from '../constants/BasketConstants';

const INITIAL_STATE = {
    basket: [],
    error : null,
    loading: true
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {

        case BASKET_ERROR:
            return {...state, basket: [], error: getMessageFromAction(action), loading: false};

        case BASKET_REQUEST:
            return {...state, basket: [], error: null, loading: true};

        case BASKET_SUCCESS:
            return {...state, basket: getDataFromAction(action), loading: false};

        default:
            return state;
    }
}
