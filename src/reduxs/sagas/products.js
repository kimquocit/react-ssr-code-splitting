import { takeEvery, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/products';
import * as Types from '../../constants/ActionTypes';
import 'isomorphic-fetch';

export function* getProducts() {
    try {
        const result = yield fetch('https://5cfdeea0ca949b00148d39c9.mockapi.io/api/item')
            .then(res => {
                return res.text();
            }).then(data => {
                return JSON.parse(data);
            });

        yield put(actions.getProductsSuccess(result));
    } catch (error) {
        console.error(error);
    }
}

export function* getProductDetail(action) {
    try {
        const result = yield fetch(`https://5cfdeea0ca949b00148d39c9.mockapi.io/api/item/${action.payload}`)
            .then(res => {
                return res.text();
            }).then(data => {
                return JSON.parse(data);
            });

        yield put(actions.getProductDetailSuccess(result));
    } catch (error) {
        console.error(error);
    }
}

export function* watchGetProductsRequest() {
    yield takeEvery(Types.GET_PRODUCTS_REQUEST, getProducts);
}

export function* watchGetProductDetailRequest() {
    yield takeEvery(Types.GET_PRODUCT_DETAIL_REQUEST, getProductDetail);
}

const productSagas = [fork(watchGetProductsRequest), fork(watchGetProductDetailRequest)];

export default productSagas;
