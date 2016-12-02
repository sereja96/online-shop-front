import { getDataFromAction, getMessageFromAction } from '../actions/RequestAction';
import { PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_ERROR } from '../constants/ProductConstants';

const INITIAL_STATE = {
    products: [],
    product: {},
    error : null,
    loading: true
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {

        case PRODUCT_REQUEST:
            return {...state, product: {}, error: null, loading: true};
        case PRODUCT_SUCCESS:
            return {...state, product: getDataFromAction(action), error: null, loading: false };
        case PRODUCT_ERROR:
            return {...state, product: {}, error: getMessageFromAction(action), loading: false};

        default:
            return state;
    }
}
