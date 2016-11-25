import { getData } from './RequestAction';
import { CATEGORIES_REQUEST,
    CATEGORIES_SUCCESS,
    CATEGORIES_ERROR,
    CATEGORY_REQUEST,
    CATEGORY_SUCCESS,
    CATEGORY_ERROR } from '../constants/CategoryConstants';

/**
 *  Get Popular Categories
 */
export function fetchPopularCategories (count) {
    const request = getData(['/categories/popular', count].join('/'), false);

    return {
        type: CATEGORIES_REQUEST,
        payload: request
    };
}

export function fetchPopularCategoriesError (response) {
    return {
        type: CATEGORIES_ERROR,
        payload: response.payload
    };
}

export function fetchPopularCategoriesSuccess (response) {
    return {
        type: CATEGORIES_SUCCESS,
        payload: response.payload
    };
}

/**
 *  Get Category Info With Products
 */

export function fetchCategory (id) {
    const request = getData(['/category', id].join('/'), false);

    return {
        type: CATEGORY_REQUEST,
        payload: request
    }
}

export function fetchCategorySuccess (response) {
    return {
        type: CATEGORY_SUCCESS,
        payload: response.payload
    }
}

export function fetchCategoryError (response) {
    return {
        type: CATEGORY_ERROR,
        payload: response.payload
    }
}
