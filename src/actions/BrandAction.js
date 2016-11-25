import { getData } from './RequestAction';
import { BRANDS_REQUEST,
    BRANDS_SUCCESS,
    BRANDS_ERROR,
    BRAND_REQUEST,
    BRAND_SUCCESS,
    BRAND_ERROR } from '../constants/BrandConstants';

/**
 *  Get Popular Brands
 */

export function fetchPopularBrands (count) {
    const request = getData(['/brands/popular', count].join('/'), false);

    return {
        type: BRANDS_REQUEST,
        payload: request
    };
}

export function fetchPopularBrandsError (response) {
    return {
        type: BRANDS_ERROR,
        payload: response.payload
    };
}

export function fetchPopularBrandsSuccess (response) {
    return {
        type: BRANDS_SUCCESS,
        payload: response.payload
    };
}

/**
 *  Get Brand Info With Products
 */

export function fetchBrand (id) {
    const request = getData(['/brand', id].join('/'), false);

    return {
        type: BRAND_REQUEST,
        payload: request
    }
}

export function fetchBrandSuccess (response) {
    return {
        type: BRAND_SUCCESS,
        payload: response.payload
    }
}

export function fetchBrandError (response) {
    return {
        type: BRAND_ERROR,
        payload: response.payload
    }
}
