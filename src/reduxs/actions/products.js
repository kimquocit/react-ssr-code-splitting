import * as Types from '../../constants/ActionTypes';

export const getProductsRequest = () => ({
    type: Types.GET_PRODUCTS_REQUEST
});

export const getProductsSuccess = items => ({
    type: Types.GET_PRODUCTS_SUCCESS,
    payload: items
});

export const getProductDetailRequest = id => ({
    type: Types.GET_PRODUCT_DETAIL_REQUEST,
    payload: id
});

export const getProductDetailSuccess = items => ({
    type: Types.GET_PRODUCT_DETAIL_SUCCESS,
    payload: items
});