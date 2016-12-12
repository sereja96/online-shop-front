import { getData } from './RequestAction';
import { POPULAR_SHOPS_REQUEST,
    POPULAR_SHOPS_SUCCESS,
    POPULAR_SHOPS_ERROR,
    SHOP_REQUEST,
    SHOP_SUCCESS,
    SHOP_ERROR } from '../constants/ShopConstants';

/**
 *  Shops Order By Rate
 */

export function fetchPopularShops(count) {
    const request = getData(['/shops/popular', count].join('/'), false);

    return {
        type: POPULAR_SHOPS_REQUEST,
        payload: request
    };
}

export function fetchMyShops (count) {
    const request = getData(['/shops/my', count].join('/'), true);

    return {
        type: POPULAR_SHOPS_REQUEST,
        payload: request
    }
}

export function fetchPopularShopsError(response) {
    return {
        type: POPULAR_SHOPS_ERROR,
        payload: response.payload
    };
}

export function fetchPopularShopsSuccess(response) {
    return {
        type: POPULAR_SHOPS_SUCCESS,
        payload: response.payload
    };
}

/**
 *  Shop With Products
 */

export function fetchShop(id) {
    const request = getData(['/shop', id].join('/'), false);

    return {
        type: SHOP_REQUEST,
        payload: request
    }
}

export function fetchShopSuccess(response) {
    return {
        type: SHOP_SUCCESS,
        payload: response.payload
    }
}

export function fetchShopError(response) {
    return {
        type: SHOP_ERROR,
        payload: response.payload
    }
}
