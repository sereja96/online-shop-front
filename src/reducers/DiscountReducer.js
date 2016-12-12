import { getDataFromAction, getMessageFromAction } from '../actions/RequestAction';
import { CHECK_DISCOUNT_ERROR, CHECK_DISCOUNT_REQUEST, CHECK_DISCOUNT_SUCCESS } from '../constants/DiscountConstants';

const INITIAL_STATE = {
    discount: null,
    error : null,
    loading: false
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {

        case CHECK_DISCOUNT_REQUEST:
            return {...state, discount: null, error: null, loading: true};
        case CHECK_DISCOUNT_ERROR:
            return {...state, discount: null, error: getMessageFromAction(action), loading: false};
        case CHECK_DISCOUNT_SUCCESS:
            return {...state, discount: getDataFromAction(action), error: null, loading: false};

        default:
            return state;
    }
}

