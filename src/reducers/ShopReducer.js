import { getDataFromAction, getMessageFromAction } from '../actions/RequestAction';
import { POPULAR_SHOPS_REQUEST,
    POPULAR_SHOPS_SUCCESS,
    POPULAR_SHOPS_ERROR,
    SHOP_REQUEST,
    SHOP_ERROR,
    SHOP_SUCCESS } from '../constants/ShopConstants';

const INITIAL_STATE = {
    shops: [],
    shop: {},
    error : null,
    loading: true
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {

        case POPULAR_SHOPS_REQUEST:
            return {...state, shops: [], error: null, loading: true};
        case POPULAR_SHOPS_SUCCESS:
            return {...state, shops: getDataFromAction(action), error: null, loading: false };
        case POPULAR_SHOPS_ERROR:
            return {...state, shops: [], error: getMessageFromAction(action), loading: false};

        case SHOP_REQUEST:
            return {...state, shop: {}, error: null, loading: true };
        case SHOP_SUCCESS:
            return {...state, shop: getDataFromAction(action), error: null, loading: false};
        case SHOP_ERROR:
            return {...state, shop: {}, error: getMessageFromAction(action), loading: false};

        default:
            return state;
    }
}
