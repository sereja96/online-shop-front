import { getDataFromAction, getMessageFromAction } from '../actions/RequestAction';
import { CATEGORIES_REQUEST,
    CATEGORIES_ERROR,
    CATEGORIES_SUCCESS,
    CATEGORY_REQUEST,
    CATEGORY_SUCCESS,
    CATEGORY_ERROR } from '../constants/CategoryConstants';

const INITIAL_STATE = {
    categories: [],
    category: {},
    error : null,
    loading: true
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {

        case CATEGORIES_REQUEST:
            return {...state, categories: [], error : null, loading: true};
        case CATEGORIES_SUCCESS:
            return {...state, categories: getDataFromAction(action), error: null, loading: false };
        case CATEGORIES_ERROR:
            return {...state, categories: [], error: getMessageFromAction(action), loading: false};

        case CATEGORY_REQUEST:
            return {...state, category: {}, error: null, loading: true};
        case CATEGORY_SUCCESS:
            return {...state, category: getDataFromAction(action), error: null, loading: false};
        case CATEGORY_ERROR:
            return {...state, category: {}, error: getMessageFromAction(action), loading: false};

        default:
            return state;
    }
}
