import { getDataFromAction, getMessageFromAction } from '../actions/RequestAction';
import { BRANDS_REQUEST,
    BRANDS_ERROR,
    BRANDS_SUCCESS,
    BRAND_REQUEST,
    BRAND_SUCCESS,
    BRAND_ERROR } from '../constants/BrandConstants';

const INITIAL_STATE = {
    brands: [],
    brand: {},
    error : null,
    loading: true
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {

        case BRANDS_REQUEST:
            return {...state, brands: [], error : null, loading: true};
        case BRANDS_SUCCESS:
            return {...state, brands: getDataFromAction(action), error: null, loading: false };
        case BRANDS_ERROR:
            return {...state, brands: [], error: getMessageFromAction(action), loading: false};

        case BRAND_REQUEST:
            return {...state, brand: {}, error: null, loading: true};
        case BRAND_SUCCESS:
            return {...state, brand: getDataFromAction(action), error: null, loading: false};
        case BRAND_ERROR:
            return {...state, brand: {}, error: getMessageFromAction(action), loading: false};

        default:
            return state;
    }
}

